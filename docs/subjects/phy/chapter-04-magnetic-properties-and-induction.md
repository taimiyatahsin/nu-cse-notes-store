# Physics Chapter 04: Magnetic Properties of Matter and Induction

**Course:** Physics (510207)

> **Learning order:** Magnetic dipoles → magnetic materials → magnetic circuits → electromagnetic induction → inductance → magnetic energy and losses.

---

## 1. Magnetic Dipole and Magnetic Poles

A **magnetic dipole** is a system consisting of two unlike magnetic poles of equal strength separated by a small distance. A bar magnet, magnetic needle and current-carrying loop are examples.

A **magnetic pole** is the region near either end of a magnet where the external magnetic effect is strongest. Unlike poles attract; like poles repel.

An isolated north or south magnetic pole (a magnetic monopole) has not been observed in classical electromagnetism. Magnetic field lines form closed loops.

## 2. Gauss's Law for Magnetism

**Statement:** The net magnetic flux through any closed surface is zero.

\[
\boxed{\oint_S\vec B\cdot d\vec A=0}
\]

This means that magnetic field lines do not begin or end at an isolated magnetic charge; they form closed loops.

**Exam explanation:** As many magnetic field lines enter a closed surface as leave it. Therefore, the net magnetic flux through the closed surface is zero.

---

## 3. Magnetic Materials

Materials respond differently when placed in an external magnetic field. The three basic classes are diamagnetic, paramagnetic and ferromagnetic.

### 3.1 Diamagnetic materials

Diamagnetic materials develop an induced magnetic moment that opposes the applied magnetic field.

- Weakly repelled by an external magnetic field.
- Magnetic susceptibility \(\chi_m\) is small and negative.
- Relative permeability \(\mu_r\) is slightly less than 1.
- The effect usually disappears when the external field is removed.
- Examples: bismuth, copper, silver and water.

### 3.2 Paramagnetic materials

Paramagnetic materials have atomic or molecular magnetic moments that tend to align weakly with an external magnetic field.

- Weakly attracted by an external magnetic field.
- Magnetic susceptibility is small and positive.
- Relative permeability is slightly greater than 1.
- Thermal motion tends to randomize the alignment.
- Examples: aluminium, platinum and oxygen.

### 3.3 Ferromagnetic materials

Ferromagnetic materials contain magnetic domains. In an unmagnetized specimen, domains may point in different directions. An applied magnetic field can cause domain walls to move and domains to align, producing strong magnetization.

- Strongly attracted by an external magnetic field.
- Susceptibility can be large and positive.
- Relative permeability can be much greater than 1 and is not generally constant.
- They may retain magnetization after the external field is removed.
- Examples: iron, cobalt and nickel.
- Above the Curie temperature, a ferromagnetic material loses its spontaneous ferromagnetic order and becomes paramagnetic.

### 3.4 Comparison table

| Property | Diamagnetic | Paramagnetic | Ferromagnetic |
|---|---|---|---|
| Response | Weakly repelled | Weakly attracted | Strongly attracted |
| Susceptibility \(\chi_m\) | Small negative | Small positive | Large positive; nonlinear |
| Relative permeability \(\mu_r\) | Slightly below 1 | Slightly above 1 | Often much greater than 1 |
| Domain behaviour | No permanent aligned domains | Moments weakly align with field | Domains can align strongly |
| Retains magnetization? | Generally no | Generally no | May retain it |
| Examples | Bismuth, copper | Aluminium, platinum | Iron, cobalt, nickel |

**Memory aid:** Dia = away (weak repulsion); Para = partly with the field (weak attraction); Ferro = strongly aligned (strong attraction).

---

## 4. Magnetization, Magnetic Field Intensity and Flux Density

**Magnetization \(M\):** Magnetic dipole moment per unit volume of a material.

\[
M=\frac{\text{net magnetic dipole moment}}{\text{volume}}
\]

SI unit: A/m.

**Magnetic field intensity \(H\):** A measure of the magnetizing field applied to a material. SI unit: A/m.

For a long solenoid in air or vacuum:

\[
\boxed{H=nI=\frac{NI}{\ell}}
\]

**Magnetic flux density \(B\):** The magnetic field quantity measured in tesla (T).

For a linear, isotropic material:

\[
\boxed{B=\mu H=\mu_0\mu_rH}
\]

More generally in SI:

\[
\boxed{B=\mu_0(H+M)}
\]

For a linear material, \(M=\chi_mH\) and \(\mu_r=1+\chi_m\). Ferromagnetic materials are generally nonlinear and may show hysteresis, so a single constant permeability does not describe every operating condition.

---

## 5. Magnetomotive Force and Magnetic Circuit

**Magnetomotive force (MMF):** The quantity that drives magnetic flux around a magnetic circuit.

For a coil with \(N\) turns carrying current \(I\):

\[
\boxed{\text{MMF}=NI}
\]

SI unit: ampere-turn (A-turn).

For a uniform magnetic path of length \(\ell\), cross-sectional area \(A\), and permeability \(\mu\), magnetic reluctance is:

\[
\boxed{\mathcal R=\frac{\ell}{\mu A}}
\]

The magnetic-circuit relation is:

\[
\boxed{\Phi=\frac{NI}{\mathcal R}}
\]

where \(\Phi\) is magnetic flux in weber (Wb).

---

## 6. Magnetic Flux

Magnetic flux measures the magnetic field passing through a surface.

For a uniform field and a flat surface:

\[
\boxed{\Phi_B=BA\cos\theta}
\]

Here \(\theta\) is measured between \(\vec B\) and the surface normal (area vector).

- Maximum flux: \(\theta=0^\circ\), so \(\Phi_B=BA\).
- Zero flux: \(\theta=90^\circ\).
- SI unit: weber (Wb), where \(1\,Wb=1\,T\,m^2\).

---

## 7. Electromagnetic Induction

**Electromagnetic induction** is the production of an EMF in a circuit when the magnetic flux linkage through it changes.

A change in flux can occur by:
- changing the magnetic field strength;
- changing the area of the loop inside the field;
- rotating the loop and changing its orientation;
- moving the magnet or coil relative to one another.

### 7.1 Faraday's laws

1. An EMF is induced whenever the magnetic flux linked with a circuit changes.
2. The magnitude of induced EMF is proportional to the rate of change of magnetic flux linkage.

For a coil of \(N\) turns:

\[
\boxed{\mathcal E=-N\frac{d\Phi_B}{dt}}
\]

For a finite time interval, the magnitude of average EMF is:

\[
\boxed{|\mathcal E_{\text{avg}}|=N\frac{|\Delta\Phi_B|}{\Delta t}}
\]

The negative sign represents Lenz's law.

### 7.2 Lenz's law

**Statement:** The induced current flows in a direction such that the magnetic field it produces opposes the change in magnetic flux that causes the current.

**Why?** This opposition is consistent with the law of conservation of energy. If the induced current helped the change that produced it, energy could be created without external work.

---

## 8. Self-Inductance

**Self-inductance** is the property of a coil or circuit by which a change in its own current induces an EMF in the same circuit.

\[
\boxed{\mathcal E=-L\frac{dI}{dt}}
\]

For a long solenoid with a uniform core:

\[
\boxed{L=\frac{\mu N^2A}{\ell}}
\]

where \(L\) is inductance in henry (H).

**One henry:** A circuit has an inductance of 1 H if a current changing at 1 A/s induces an EMF of magnitude 1 V.

---

## 9. Mutual Inductance

**Mutual inductance** is the property by which a change of current in one coil induces an EMF in a nearby magnetically coupled coil.

\[
\boxed{\mathcal E_2=-M\frac{dI_1}{dt}}
\]

The mutual inductance of two coils is measured in henry (H).

### Coefficient of magnetic coupling

\[
\boxed{k=\frac{M}{\sqrt{L_1L_2}}}
\]

For passive coupled coils, \(0\leq k\leq1\). A larger value indicates stronger magnetic coupling.

---

## 10. Inductors in Series and Parallel

For ideal uncoupled inductors:

**Series connection**

\[
\boxed{L_{\text{eq}}=L_1+L_2+\cdots}
\]

**Parallel connection**

\[
\boxed{\frac1{L_{\text{eq}}}=\frac1{L_1}+\frac1{L_2}+\cdots}
\]

These simple formulas assume the inductors are not magnetically coupled.

---

## 11. Energy Stored in a Magnetic Field

An inductor stores energy in its magnetic field.

\[
\boxed{U=\frac12LI^2}
\]

where \(U\) is energy in joule (J), \(L\) is inductance in henry and \(I\) is current in ampere.

---

## 12. Rise and Decay of Current in an RL Circuit

An RL circuit contains a resistor \(R\) and an inductor \(L\).

### 12.1 Current growth after connecting a DC source

When a DC source of voltage \(V\) is connected to a series RL circuit, the inductor opposes the change in current. The current rises gradually:

\[
\boxed{i(t)=\frac VR\left(1-e^{-t/\tau}\right)}
\]

### 12.2 Current decay after disconnecting the source

When the source is removed and the inductor discharges through the resistance:

\[
\boxed{i(t)=I_0e^{-t/\tau}}
\]

### 12.3 Time constant

\[
\boxed{\tau=\frac LR}
\]

At \(t=\tau\):
- During growth, current reaches about 63.2% of its final value.
- During decay, current falls to about 36.8% of its initial value.

---

## 13. Hysteresis and the B-H Curve

**Magnetic hysteresis** is the lag of magnetic flux density \(B\) (or magnetization) behind the magnetizing field \(H\) when a ferromagnetic material is taken through a cycle of magnetization.

### Main features of a hysteresis loop

- **Saturation:** A region where increasing \(H\) produces only a small further increase in \(B\).
- **Retentivity (remanence):** The residual magnetic flux density when \(H\) returns to zero.
- **Coercivity:** The reverse magnetizing field needed to reduce the residual flux density to zero.
- **Hysteresis loop:** The closed \(B-H\) curve traced during a complete cycle.

The area enclosed by a \(B-H\) loop represents the energy loss per unit volume per cycle.

**Reducing hysteresis loss:** Use a suitable soft magnetic core material with a narrow hysteresis loop for devices that undergo repeated magnetization, such as transformers.

---

## 14. Eddy Currents and Eddy-Current Loss

**Eddy currents** are circulating currents induced inside a bulk conductor when the magnetic flux through it changes.

These currents produce heat and cause energy loss.

**Ways to reduce eddy-current loss:**
1. Build the core from thin insulated laminations rather than one solid block.
2. Use a material with suitably high electrical resistivity.
3. Keep the magnetic core design appropriate for the operating frequency.

**Applications of eddy currents:** electromagnetic braking, induction heating and damping in some measuring instruments.

---

## 15. Comparison: Hysteresis Loss vs Eddy-Current Loss

| Hysteresis loss | Eddy-current loss |
|---|---|
| Due to repeated reversal and reorientation of magnetic domains | Due to induced circulating currents in the conducting core |
| Related to the area of the B-H loop | Related to the magnitude of induced currents and core resistance |
| Reduced using low-hysteresis core materials | Reduced using thin insulated laminations and higher-resistivity materials |

---

## 16. Solved Numerical Problems

### Example 1: Average induced EMF

A 100-turn coil experiences a flux change from \(0.02\,Wb\) to \(0.01\,Wb\) in \(0.1\,s\). Find the magnitude of average induced EMF.

\[
|\mathcal E|=N\frac{|\Delta\Phi|}{\Delta t}
=100\times\frac{0.01}{0.1}
=\boxed{10\,V}
\]

### Example 2: Energy stored in an inductor

A \(2\,H\) inductor carries \(3\,A\).

\[
U=\frac12LI^2
=\frac12\times2\times3^2
=\boxed{9\,J}
\]

### Example 3: RL time constant

For \(L=4\,H\) and \(R=2\,\Omega\):

\[
\tau=\frac LR=\frac42=\boxed{2\,s}
\]

### Example 4: Magnetic flux

A uniform \(0.5\,T\) field passes through a \(0.02\,m^2\) surface. The angle between the field and the surface normal is \(60^\circ\).

\[
\Phi_B=BA\cos60^\circ
=(0.5)(0.02)(0.5)
=\boxed{0.005\,Wb}
\]

---

## 17. Formula Sheet

| Quantity | Formula | SI unit |
|---|---|---|
| Magnetic flux | \(\Phi_B=BA\cos\theta\) | Wb |
| Gauss's law for magnetism | \(\oint\vec B\cdot d\vec A=0\) | — |
| Magnetization | \(M=\text{dipole moment}/\text{volume}\) | A/m |
| Linear material relation | \(B=\mu H\) | T |
| MMF | \(NI\) | A-turn |
| Reluctance | \(\mathcal R=\ell/(\mu A)\) | A-turn/Wb |
| Faraday's law | \(\mathcal E=-N\,d\Phi_B/dt\) | V |
| Self-induced EMF | \(\mathcal E=-L\,dI/dt\) | V |
| Solenoid inductance | \(L=\mu N^2A/\ell\) | H |
| Mutual induction | \(\mathcal E_2=-M\,dI_1/dt\) | V |
| Coupling coefficient | \(k=M/\sqrt{L_1L_2}\) | — |
| Energy in an inductor | \(U=\frac12LI^2\) | J |
| RL time constant | \(\tau=L/R\) | s |
| RL current growth | \(i=(V/R)(1-e^{-t/\tau})\) | A |
| RL current decay | \(i=I_0e^{-t/\tau}\) | A |

---

## 18. Short Questions and Answers

**Q1. What is a magnetic dipole?**  
A system of two unlike magnetic poles of equal strength separated by a small distance is called a magnetic dipole.

**Q2. State Gauss's law for magnetism.**  
The net magnetic flux through any closed surface is zero.

**Q3. What is magnetization?**  
Magnetization is the magnetic dipole moment per unit volume of a material.

**Q4. Define magnetomotive force.**  
Magnetomotive force is the quantity that drives magnetic flux in a magnetic circuit. For a coil, \(MMF=NI\).

**Q5. What is electromagnetic induction?**  
It is the production of EMF in a circuit due to a change in magnetic flux linkage.

**Q6. State Lenz's law.**  
The induced current flows in a direction that opposes the change in magnetic flux that produces it.

**Q7. What is self-inductance?**  
It is the property by which a change in a circuit's own current induces an EMF in that same circuit.

**Q8. What is mutual inductance?**  
It is the property by which a changing current in one coil induces an EMF in another magnetically coupled coil.

**Q9. What is hysteresis?**  
It is the lag of magnetic flux density or magnetization behind the magnetizing field during cyclic magnetization.

**Q10. What are eddy currents?**  
They are circulating currents induced inside a conductor by changing magnetic flux.

---

## 19. Common Mistakes

1. In \(\Phi_B=BA\cos\theta\), measure \(\theta\) from the area vector (surface normal).
2. Include the number of turns \(N\) in Faraday's law for a coil.
3. The negative sign in Faraday's law represents Lenz's law; use absolute value when only magnitude is requested.
4. Do not confuse \(B\) (T) with \(H\) (A/m).
5. The RL time constant is \(L/R\), not \(R/L\).
6. Hysteresis loss and eddy-current loss have different physical causes.
7. The simple series/parallel inductor formulas assume ideal uncoupled inductors.

---

## 20. Practice Questions

*These are original practice questions, not verified NU previous-year questions.*

1. A 50-turn coil has flux per turn reduced from \(8\,mWb\) to \(2\,mWb\) in \(0.2\,s\). Find the magnitude of average induced EMF.
2. A \(5\,H\) inductor carries \(2\,A\). Find the stored energy.
3. Calculate the RL time constant for \(L=3\,H\) and \(R=6\,\Omega\).
4. A \(0.4\,T\) field makes \(30^\circ\) with the normal to a \(0.05\,m^2\) surface. Find magnetic flux.
5. Compare diamagnetic, paramagnetic and ferromagnetic materials.
6. Explain the meaning of retentivity and coercivity on a B-H curve.
7. Explain two methods of reducing eddy-current loss.
8. Distinguish self-inductance from mutual inductance.
9. State Faraday's laws and explain the significance of the negative sign.
10. Derive the expression for the current growth in a series RL circuit.

### Answer check

1. \(1.5\,V\)
2. \(10\,J\)
3. \(0.5\,s\)
4. Approximately \(0.0173\,Wb\)

---

*These original notes are organized around the Physics (510207) syllabus reference recorded in this repository. The uploaded class PDF “Magnetic Materials and Related Topics” was used to check the requested magnetic-dipole, magnetic-material, Gauss-law, hysteresis and eddy-current topics. Some explanations and equations have been clarified for consistency with standard SI notation. Confirm the current examination scope with your department.*
