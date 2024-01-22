name: inverse
layout: true
class: center, middle, inverse
---
# ENSE 350: Math for Software Eng.

### Lecture 5: Well Ordering Principle, Examples

$\cdot$ Adam Tilson, M.A.Sc., P.Eng

---
layout: false
.left-column[
## Agenda
]
.right-column[
1. Review: Lecture 4 Highlights
1. Well Ordering Principle
1. Examples
]

---
## Review: Invariant
- The invariant is some property of the system which is true in the start state of the system, and true in every legal move. 
- We can use this to prove if the system is in a winnable state, or an unwinnable state.

An example you may have already seen - A loop invariant (coding), a condition which is true at that start of every loop that a program runs. 

---

### Review: Strong Induction Comparison

Ordinary Induction:

$\dfrac{P(0), \forall n \in \mathbb{N}, P(n) \Rightarrow P(n+1)}{\forall m \in \mathbb{N}, P(m)}$

Strong Induction:

$\dfrac{P(0)+, \forall n \in \mathbb{N}, P(0) \wedge P(1) \wedge P(2) \wedge ... \wedge P(n) \Rightarrow P(n+1)}{\forall m \in \mathbb{N}, P(m)}$

---

### Review: When to use Strong Induction
When to use strong induction
- When there is no obvious connection between $P(n)$ and $P(n+1)$
- i.e. we can't use $P(n)$ directly to prove $P(n+1)$
- However, we may be able to use some combination of $P(0), P(1), P(2) ... P(n)$

---

### Review: How to use Strong Induction: Proof Template
- State that we are solving the problem by strong induction
- Define our Induction Hypothesis, $P(n)$, defining the induction variable $n$
- Prove the base case(s): $P(0)$ is true, may be others.
- Prove the inductive step: $P(0) \wedge P(1) \wedge P(2) \wedge ... \wedge P(n) \Rightarrow P(n+1)$
- By induction, conclude P(n) is true for all $n \in \mathbb{D}$

---

### References

- Dr. Abdul Bais's ENSE 350 Slides
- Albert Meyer, and Adam Chlipala. 6.042J Mathematics for Computer Science. Spring 2015. Massachusetts Institute of Technology: MIT OpenCourseWare, https://ocw.mit.edu. License: Creative Commons BY-NC-SA.
---
name: inverse
layout: true
class: center, middle, inverse
---
# Questions?