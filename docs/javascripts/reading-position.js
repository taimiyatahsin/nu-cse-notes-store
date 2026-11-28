(() => {
  "use strict";
  const BASE = "/nu-cse-notes-store/";
  const SCROLL_PREFIX = "nuCseReadingPositionV1:";
  const LIBRARY_KEY = "nuCseLibraryFiltersV1";
  const safeStorage = {
    get(key) { try { return sessionStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { sessionStorage.setItem(key, value); } catch (_) {} }
  };
  const currentKey = () => SCROLL_PREFIX + location.pathname + location.search + location.hash;
  const internalReferrer = () => {
    try {
      const ref = new URL(document.referrer);
      return ref.origin === location.origin && ref.pathname.startsWith(BASE) && ref.href !== location.href;
    } catch (_) { return false; }
  };
  function savePosition() {
    if (location.hash) return;
    safeStorage.set(currentKey(), String(Math.max(0, window.scrollY || window.pageYOffset || 0)));
  }
  function restorePosition(event) {
    if (location.hash) return;
    let type = "navigate";
    try { type = performance.getEntriesByType("navigation")[0]?.type || type; } catch (_) {}
    if (!event.persisted && type !== "back_forward" && type !== "reload") return;
    const saved = Number(safeStorage.get(currentKey()));
    if (!Number.isFinite(saved) || saved < 0) return;
    requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, saved)));
  }
  function addNavigation() {
    const content = document.querySelector(".md-content");
    if (!content || document.querySelector("#site-page-navigation") || document.querySelector("#site-subject-navigation")) return;
    // Replace the older subject-only Back control with one consistent control.
    document.querySelector("#site-chapter-back")?.remove();
    const nav = document.createElement("nav");
    nav.id = "site-page-navigation";
    nav.className = "site-page-navigation";
    nav.setAttribute("aria-label", "Page navigation");
    const back = document.createElement("button");
    back.type = "button";
    back.className = "site-page-back";
    back.textContent = "← Back";
    back.addEventListener("click", () => {
      if (internalReferrer() && history.length > 1) {
        history.back();
        return;
      }
      const relative = location.pathname.startsWith(BASE) ? location.pathname.slice(BASE.length).split("/").filter(Boolean) : [];
      relative.pop();
      const parent = BASE + (relative.length ? relative.join("/") + "/" : "");
      location.assign(parent);
    });
    const home = document.createElement("a");
    home.className = "site-page-home";
    home.href = BASE;
    home.textContent = "Home";
    nav.append(back, home);
    content.insertBefore(nav, content.firstChild);
  }
  function setupLibraryMemory() {
    const search = document.querySelector("#library-search");
    const subject = document.querySelector("#library-subject");
    const type = document.querySelector("#library-type");
    if (!search || !subject || !type) return;
    let saved = {};
    try { saved = JSON.parse(safeStorage.get(LIBRARY_KEY) || "{}") || {}; } catch (_) {}
    if (typeof saved.search === "string") search.value = saved.search;
    if (typeof saved.subject === "string" && Array.from(subject.options).some(o => o.value === saved.subject)) subject.value = saved.subject;
    if (typeof saved.type === "string" && Array.from(type.options).some(o => o.value === saved.type)) type.value = saved.type;
    const persist = () => safeStorage.set(LIBRARY_KEY, JSON.stringify({ search: search.value, subject: subject.value, type: type.value }));
    ["input", "change"].forEach(eventName => {
      search.addEventListener(eventName, persist);
      subject.addEventListener(eventName, persist);
      type.addEventListener(eventName, persist);
    });
    search.dispatchEvent(new Event("input", { bubbles: true }));
    subject.dispatchEvent(new Event("change", { bubbles: true }));
    type.dispatchEvent(new Event("change", { bubbles: true }));
  }
  function init() {
    addNavigation();
    setupLibraryMemory();
    window.addEventListener("pagehide", savePosition);
    window.addEventListener("pageshow", restorePosition);
    let pending = false;
    window.addEventListener("scroll", () => {
      if (pending) return;
      pending = true;
      window.setTimeout(() => { savePosition(); pending = false; }, 180);
    }, { passive: true });
    window.addEventListener("hashchange", savePosition);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();