(() => {
  "use strict";
  const BASE = new URL("/nu-cse-notes-store/", location.origin);
  const RECENT = "nuCseRecentPagesV1";
  const DONE = "nuCseStudyProgressV1";
  const $ = (s, r = document) => r.querySelector(s);
  const read = key => { try { const v = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(v) ? v : []; } catch (_) { return []; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (_) { return false; } };
  const page = () => {
    const url = new URL(location.href); url.hash = ""; url.search = "";
    return { url: url.href, title: $(".md-content h1")?.textContent?.trim() || document.title.replace(/\s+-\s+NU CSE Notes Store$/, ""), visitedAt: new Date().toISOString() };
  };
  const safe = value => { try { const u = new URL(value, location.href); return u.origin === location.origin && u.pathname.startsWith(BASE.pathname) ? u.href : null; } catch (_) { return null; } };
  function rememberVisit() {
    const current = page(), items = read(RECENT).filter(x => x && safe(x.url) && x.url !== current.url);
    write(RECENT, [current, ...items].slice(0, 12));
  }
  function completed() { return read(DONE).filter(x => x && safe(x.url)); }
  function setCompleted(url, title, done) {
    const items = completed().filter(x => x.url !== url);
    if (done) items.unshift({ url, title, completedAt: new Date().toISOString() });
    write(DONE, items.slice(0, 500));
    updateCompleteButton();
    renderDashboard();
  }
  function updateCompleteButton() {
    const button = $("#study-mark-complete"); if (!button) return;
    const current = page(), isDone = completed().some(x => x.url === current.url);
    button.textContent = isDone ? "✓ Completed — undo" : "＋ Mark this page complete";
    button.setAttribute("aria-pressed", String(isDone));
    button.classList.toggle("is-complete", isDone);
  }
  function addCompleteButton() {
    const content = $(".md-content"), title = $(".md-content h1");
    if (!content || !title || location.pathname.includes("/tools/study-dashboard/") || $("#study-mark-complete")) return;
    const button = document.createElement("button");
    button.type = "button"; button.id = "study-mark-complete"; button.className = "study-mark-complete";
    button.addEventListener("click", () => { const p = page(), done = !completed().some(x => x.url === p.url); setCompleted(p.url, p.title, done); });
    const nav = content.querySelector("#site-subject-navigation, #site-page-navigation");
    (nav || title).insertAdjacentElement("afterend", button);
    updateCompleteButton();
  }
  function linkList(target, items, emptyText, actionLabel) {
    if (!target) return;
    target.replaceChildren();
    if (!items.length) { const p = document.createElement("p"); p.className = "study-empty"; p.textContent = emptyText; target.append(p); return; }
    items.forEach(item => {
      const row = document.createElement("div"); row.className = "study-list-row";
      const a = document.createElement("a"); a.href = safe(item.url) || BASE.href; a.textContent = item.title || "Study page";
      const small = document.createElement("small"); small.textContent = item.visitedAt ? new Date(item.visitedAt).toLocaleString() : item.completedAt ? "Completed " + new Date(item.completedAt).toLocaleDateString() : "";
      row.append(a, small);
      if (actionLabel) { const b = document.createElement("button"); b.type = "button"; b.textContent = actionLabel; b.addEventListener("click", () => { setCompleted(item.url, item.title, false); renderDashboard(); }); row.append(b); }
      target.append(row);
    });
  }
  async function pdfCount() {
    const out = $("#study-pdf-count"); if (!out || out.dataset.loaded) return;
    out.dataset.loaded = "true";
    try {
      const response = await fetch(new URL("tools/pdf-library/", BASE));
      if (!response.ok) throw new Error("PDF library unavailable");
      const html = await response.text(), doc = new DOMParser().parseFromString(html, "text/html");
      const links = [...doc.querySelectorAll('a[href]')].map(a => a.getAttribute("href")).filter(h => h && /\.pdf(?:$|[?#])/i.test(h));
      const unique = new Set(links.map(h => { try { return new URL(h, new URL("tools/pdf-library/", BASE)).pathname; } catch (_) { return ""; } }).filter(Boolean));
      out.textContent = String(unique.size);
    } catch (_) { out.textContent = "—"; }
  }
  function renderDashboard() {
    if (!$("#study-recent-pages")) return;
    const recent = read(RECENT).filter(x => x && safe(x.url)), done = completed();
    linkList($("#study-recent-pages"), recent, "Your visited pages will appear here as you browse the portal.");
    linkList($("#study-completed-pages"), done, "No completed pages yet. Open a subject or chapter and mark it complete.", "Undo");
    const count = $("#study-completed-count"); if (count) count.textContent = String(done.length);
    const recentCount = $("#study-recent-count"); if (recentCount) recentCount.textContent = String(recent.length);
    const progress = $("#study-progress-note"); if (progress) progress.textContent = done.length ? done.length + " page" + (done.length === 1 ? "" : "s") + " completed on this browser." : "Start by opening a subject page and marking it complete.";
    pdfCount();
  }
  function init() {
    rememberVisit(); addCompleteButton(); renderDashboard();
    window.addEventListener("storage", renderDashboard);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();