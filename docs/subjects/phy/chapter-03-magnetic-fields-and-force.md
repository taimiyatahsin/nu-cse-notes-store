# Physics Chapter 03: Magnetic Fields and Force on Current

**Course:** Physics (510207)

> **Learning order:** Understand the direction of the field and force first, then learn the laws, derivations and numerical applications. Bangla-friendly explanations are followed by standard English terminology for exam writing.

---

## 1. Magnetic Field and Magnetic Dipole

A **magnetic field** is the region around a magnet, a current-carrying conductor or a moving electric charge in which magnetic effects can be detected. It is represented by \(\vec B\).

- SI unit of magnetic flux density: tesla (T).
- Magnetic field lines form closed loops.
- Outside a bar magnet, field lines go from north to south; inside the magnet, they return from south to north.
- Field lines never cross one another.

**Magnetic dipole:** A system consisting of two equal and opposite magnetic poles separated by a small distance is called a magnetic dipole. A small bar magnet and a current-carrying loop are examples.

### Magnetic field strength and flux density

In SI usage, distinguish these quantities:

| Quantity | Symbol | SI unit |
|---|---|---|
| Magnetic flux density | \(B\) | tesla (T) |
| Magnetic field intensity | \(H\) | ampere per metre (A/m) |
| Magnetic flux | \(\Phi_B\) | weber (Wb) |

For a uniform magnetic field through a flat surface:

\[
\boxed{\Phi_B=BA\cos\theta}
\]

Here \(\theta\) is the angle between the magnetic field and the **normal (area vector)** to the surface. If the field is perpendicular to the surface, \(\theta=0^\circ\) and \(\Phi_B=BA\).

---

## 2. Magnetic Force on a Moving Charge

A moving electric charge experiences a force when it enters a magnetic field. This is called **magnetic force**.

\[
\boxed{\vec F_B=q(\vec v\times\vec B)}
\]

Magnitude:

\[
\boxed{F_B=|q|vB\sin\theta}
\]

Where:
- \(q\) = charge (C)
- \(v\) = speed of the particle (m/s)
- \(B\) = magnetic flux density (T)
- \(\theta\) = angle between velocity and magnetic field

**Important cases**

- If the particle moves parallel or antiparallel to the field, \(\theta=0^\circ\) or \(180^\circ\), so \(F_B=0\).
- If it moves perpendicular to the field, \(\theta=90^\circ\), so the force is maximum.
- The magnetic force is perpendicular to the instantaneous velocity. A magnetic field alone changes the direction of motion, not the speed or kinetic energy.

**Direction:** Use the right-hand rule for a positive charge. For a negative charge, reverse the direction.

### Lorentz force

When both electric and magnetic fields act on a moving charge, the total electromagnetic force is called the **Lorentz force**:

\[
\boxed{\vec F=q(\vec E+\vec v\times\vec B)}
\]

The electric part is \(q\vec E\); the magnetic part is \(q(\vec v\times\vec B)\).

---

## 3. Motion of a Charged Particle in a Uniform Magnetic Field

When a charged particle enters a uniform magnetic field with velocity perpendicular to the field, the magnetic force acts as the centripetal force.

\[
|q|vB=\frac{mv^2}{r}
\]

Therefore, the radius of the circular path is:

\[
\boxed{r=\frac{mv}{|q|B}}
\]

Angular frequency and time period:

\[
\boxed{\omega=\frac{|q|B}{m}},\qquad
\boxed{T=\frac{2\pi m}{|q|B}}
\]

**Why is the path circular?** The magnetic force is always perpendicular to the velocity and points towards the centre of the circular path. It continuously changes the direction of velocity while its magnitude remains constant.

If the particle also has a velocity component parallel to the magnetic field, that component remains unchanged and the path becomes helical.

---

## 4. Force on a Current-Carrying Conductor

A current is a flow of moving charges. Therefore, a conductor carrying current in a magnetic field experiences a force.

For a straight conductor of length \(L\):

\[
\boxed{F=BIL\sin\theta}
\]

Vector form:

\[
\boxed{\vec F=I(\vec L\times\vec B)}
\]

For a coil of \(N\) turns:

\[
\boxed{F=NBIL\sin\theta}
\]

### Derivation for a conductor perpendicular to the field

Let:
- \(n\) = number of charge carriers per unit volume
- \(A\) = cross-sectional area
- \(L\) = length of conductor
- \(q\) = magnitude of charge of each carrier
- \(v_d\) = drift speed

Number of charge carriers in the conductor:

\[
N_c=nAL
\]

Magnetic force on one carrier at \(90^\circ\):

\[
f=qv_dB
\]

Total force:

\[
F=N_cf=nALqv_dB
\]

But current is \(I=nAqv_d\). Hence,

\[
\boxed{F=BIL}
\]

For an angle \(\theta\), the perpendicular component gives \(F=BIL\sin\theta\).

---

## 5. Magnetic Field Due to Electric Current

### 5.1 Right-hand grip rule (Maxwell's right-hand thumb rule)

Hold a straight current-carrying wire in the right hand so that the thumb points in the direction of conventional current. The curled fingers show the direction of the magnetic field around the wire.

### 5.2 Biot–Savart law

**Statement:** The magnetic field contribution \(dB\) at a point due to a small current element is directly proportional to the current \(I\), the element length \(dl\), and \(\sin\theta\), and inversely proportional to the square of the distance \(r\).

\[
\boxed{dB=\frac{\mu_0}{4\pi}\frac{I\,dl\sin\theta}{r^2}}
\]

Vector form:

\[
\boxed{d\vec B=\frac{\mu_0}{4\pi}
\frac{I(d\vec l\times\hat r)}{r^2}}
\]

Here \(\mu_0=4\pi\times10^{-7}\,T\,m/A\) is the permeability of free space.

### 5.3 Field due to a long straight wire

At a perpendicular distance \(r\) from a long straight wire carrying current \(I\):

\[
\boxed{B=\frac{\mu_0 I}{2\pi r}}
\]

The field lines are concentric circles around the wire. Their direction is found using the right-hand grip rule.

### 5.4 Field at the centre of a circular coil

For a circular coil of radius \(R\) carrying current \(I\):

\[
\boxed{B=\frac{\mu_0 I}{2R}}
\]

For a coil of \(N\) turns:

\[
\boxed{B=\frac{\mu_0 NI}{2R}}
\]

### 5.5 Ampere's circuital law

**Statement:** The line integral of the magnetic field around any closed path equals \(\mu_0\) times the net current enclosed by that path.

\[
\boxed{\oint\vec B\cdot d\vec l=\mu_0 I_{\text{enc}}}
\]

This law is especially useful when the current distribution has sufficient symmetry.

### 5.6 Field inside a long solenoid

A solenoid is a long cylindrical coil containing many closely spaced turns. For an ideal long solenoid:

\[
\boxed{B=\mu_0 nI}
\]

where \(n=N/L\) is the number of turns per unit length. The field inside is approximately uniform and the external field is comparatively weak.

---

## 6. Force Between Two Parallel Current-Carrying Wires

For two long parallel wires separated by distance \(d\), carrying currents \(I_1\) and \(I_2\):

\[
\boxed{\frac FL=\frac{\mu_0 I_1I_2}{2\pi d}}
\]

- Currents in the same direction attract.
- Currents in opposite directions repel.

---

## 7. Fleming's Rules

### Fleming's left-hand rule (motor rule)

Stretch the thumb, first finger and middle finger of the **left hand** mutually perpendicular to one another.

- First finger: magnetic field (north to south)
- Middle finger: conventional current
- Thumb: force or motion

Use it to find the direction of force on a current-carrying conductor in a motor.

### Fleming's right-hand rule (generator rule)

Stretch the thumb, first finger and middle finger of the **right hand** mutually perpendicular to one another.

- First finger: magnetic field
- Thumb: motion of the conductor
- Middle finger: induced conventional current

Use it to find the direction of induced current when a conductor moves through a magnetic field.

| Left-hand rule | Right-hand rule |
|---|---|
| Motor rule | Generator rule |
| Finds force/motion | Finds induced current |
| Middle finger represents current supplied to the conductor | Middle finger represents induced current |

---

## 8. Hall Effect and Hall Voltage

**Hall effect:** When a current-carrying conductor or semiconductor is placed in a magnetic field perpendicular to the current, a transverse potential difference develops across the material. This phenomenon is called the Hall effect.

The magnetic force pushes moving charge carriers towards one side. Charge separation produces an electric field across the material. At equilibrium, the electric and magnetic forces balance.

For a rectangular sample:

\[
\boxed{V_H=\frac{BI}{nqt}}
\]

where:
- \(B\) = magnetic flux density (T)
- \(I\) = current (A)
- \(n\) = charge-carrier number density (\(m^{-3}\))
- \(q\) = magnitude of charge per carrier (C)
- \(t\) = sample thickness along the magnetic-field direction used in this geometry (m)

The sign of the Hall voltage depends on the type of charge carrier and the chosen terminal convention. The formula above gives its magnitude for the stated arrangement.

**Applications:** Hall sensors can detect magnetic fields, measure current and help identify the sign or concentration of charge carriers.

---

## 9. Torque and Potential Energy of a Current Loop

A current-carrying coil placed in a uniform magnetic field experiences a turning effect called **torque**.

Magnetic dipole moment:

\[
\boxed{\mu=NIA}
\]

Torque magnitude:

\[
\boxed{\tau=NIAB\sin\theta=\mu B\sin\theta}
\]

Vector form:

\[
\boxed{\vec\tau=\vec\mu\times\vec B}
\]

Here \(\theta\) is the angle between the coil's **area vector** (normal to its plane) and the magnetic field.

Potential energy:

\[
\boxed{U=-\vec\mu\cdot\vec B=-\mu B\cos\theta}
\]

| Orientation | Torque | Potential energy |
|---|---:|---:|
| \(\theta=0^\circ\) | 0 | Minimum, \(-\mu B\) |
| \(\theta=90^\circ\) | Maximum, \(\mu B\) | 0 |
| \(\theta=180^\circ\) | 0 | Maximum, \(+\mu B\) |

The parallel orientation is stable equilibrium; the antiparallel orientation is unstable equilibrium.

### Solved example: torque and energy

A 20-turn coil has area \(0.01\,m^2\), current \(2\,A\), and is placed in a \(0.5\,T\) field. Find its magnetic dipole moment, maximum torque and potential energy at \(60^\circ\).

**Step 1 — Magnetic dipole moment**

\[
\mu=NIA=20\times2\times0.01
=\boxed{0.4\,A\,m^2}
\]

**Step 2 — Maximum torque**

\[
\tau_{\max}=\mu B=0.4\times0.5
=\boxed{0.2\,N\,m}
\]

**Step 3 — Potential energy**

\[
U=-\mu B\cos60^\circ
=-(0.4)(0.5)(0.5)
=\boxed{-0.1\,J}
\]

---

## 10. More Solved Numerical Problems

### Example 1: Force on a moving charge

A charge \(2\,\mu C\) moves at \(3\times10^4\,m/s\) perpendicular to a \(0.5\,T\) field. Find the force.

\[
F=|q|vB\sin90^\circ
=(2\times10^{-6})(3\times10^4)(0.5)
=\boxed{0.03\,N}
\]

### Example 2: Force on a wire

A \(0.4\,m\) wire carries \(5\,A\) perpendicular to a \(0.2\,T\) field.

\[
F=BIL=(0.2)(5)(0.4)=\boxed{0.4\,N}
\]

### Example 3: Field near a long straight wire

A long wire carries \(0.1\,A\). Find the field at \(0.01\,m\).

\[
B=\frac{4\pi\times10^{-7}\times0.1}{2\pi\times0.01}
=\boxed{2\times10^{-6}\,T}
\]

---

## 11. Formula Sheet

| Quantity | Formula | SI unit |
|---|---|---|
| Magnetic flux | \(\Phi_B=BA\cos\theta\) | Wb |
| Magnetic force on charge | \(F=|q|vB\sin\theta\) | N |
| Lorentz force | \(\vec F=q(\vec E+\vec v\times\vec B)\) | N |
| Circular path radius | \(r=mv/(|q|B)\) | m |
| Force on wire | \(F=BIL\sin\theta\) | N |
| Biot–Savart law | \(dB=(\mu_0/4\pi)(I\,dl\sin\theta/r^2)\) | T |
| Field near long wire | \(B=\mu_0I/(2\pi r)\) | T |
| Field at coil centre | \(B=\mu_0NI/(2R)\) | T |
| Ampere's law | \(\oint\vec B\cdot d\vec l=\mu_0I_{\rm enc}\) | — |
| Field inside solenoid | \(B=\mu_0nI\) | T |
| Magnetic dipole moment | \(\mu=NIA\) | \(A\,m^2\) |
| Torque on coil | \(\tau=\mu B\sin\theta\) | N m |
| Potential energy | \(U=-\mu B\cos\theta\) | J |
| Hall voltage magnitude | \(V_H=BI/(nqt)\) | V |

---

## 12. Short Questions and Answers

**Q1. What is a magnetic dipole?**  
A magnetic dipole is a system of two equal and opposite magnetic poles separated by a small distance.

**Q2. What is the SI unit of magnetic flux density?**  
Tesla (T).

**Q3. State the magnetic force on a moving charge.**  
\(\vec F=q(\vec v\times\vec B)\).

**Q4. What is Lorentz force?**  
The total force on a charge due to electric and magnetic fields is called Lorentz force.

**Q5. State the right-hand grip rule.**  
If the right thumb points in the direction of conventional current, the curled fingers show the direction of the magnetic field around the wire.

**Q6. State Ampere's circuital law.**  
The line integral of the magnetic field around a closed path is equal to \(\mu_0\) times the net current enclosed.

**Q7. What is the Hall effect?**  
The development of a transverse potential difference in a current-carrying material placed in a perpendicular magnetic field is called the Hall effect.

**Q8. When is torque on a current loop maximum?**  
When the area vector of the loop is perpendicular to the magnetic field, \(\theta=90^\circ\).

**Q9. What is the field inside an ideal long solenoid?**  
\(B=\mu_0nI\).

---

## 13. Common Mistakes

1. In \(F=|q|vB\sin\theta\), measure \(\theta\) between velocity and magnetic field.
2. For a negative charge, reverse the right-hand-rule direction.
3. In magnetic flux, measure the angle from the surface normal, not from the surface itself.
4. In torque and potential-energy formulas, use the angle between the area vector and the field.
5. Do not confuse \(B\) (tesla) with \(H\) (A/m).
6. A magnetic force alone does no work on a point charge; it does not change the particle's speed.
7. Convert \(\mu C\) to \(C\): \(1\,\mu C=10^{-6}\,C\).

---

## 14. Practice Questions

*These are original practice questions, not verified NU previous-year questions.*

1. A \(5\,\mu C\) charge moves at \(2\times10^4\,m/s\) at \(30^\circ\) to a \(0.4\,T\) field. Find the magnetic force magnitude.
2. A \(0.5\,m\) conductor carries \(4\,A\) at \(30^\circ\) to a \(0.3\,T\) field. Find the force.
3. Find the magnetic field \(0.05\,m\) from a long straight wire carrying \(8\,A\).
4. A 50-turn coil of area \(0.02\,m^2\) carries \(0.5\,A\) in a \(0.4\,T\) field. Find its maximum torque.
5. State the difference between Fleming's left-hand and right-hand rules.
6. Explain the Hall effect and write the expression for Hall voltage.
7. State Biot–Savart law and Ampere's circuital law.
8. Derive the expression for the magnetic field inside a long solenoid.

### Answer check

1. \(0.02\,N\)
2. \(0.3\,N\)
3. \(3.2\times10^{-5}\,T\)
4. \(0.2\,N\,m\)

---

*These original study notes are organized around the Physics (510207) syllabus reference recorded in this repository. The uploaded class note titled “Magnetic Field & Force on Current” was used to check topic coverage; standard vector notation and explanations have been clarified. Supporting extensions such as the Lorentz force and Hall effect should be checked against your teacher's current examination scope.*
