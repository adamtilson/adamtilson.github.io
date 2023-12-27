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
## Well-Ordering Principle
The well-ordering principle states that:

- every non-empty set 
- of non-negative integers 
- has a smallest element
 
This seems very obvious, but can actually be used to formulate some powerful proofs.

---
## Well-Ordering Principle - Common Formulation
- Goal: prove some $P(n)$ is true, ie. $\forall n, P(n)$
- Define the set $S$, of counter-examples for which $P(n)$ is false, i.e. $\exists n, \neg P(n)$
- By the well-ordering principle, define $s$ as the lowest element in $S$
- Do a proof by contradiction (open ended)
  - e.g. show that a value smaller than $s$ satisfies $\neg P(n)$
  - Thus that value is also in $S$
  - Thus $s$ was not the lowest value in $S$
- Contradiction ⨳
- By the well-ordering principle, $S$ must be empty. $P(n)$ must be true for all $n$.

---
## Well-Ordering Principle - Other Strategies

Other ways to reach a contradiction:
- Prove that $s$ is not in $S$
  - i.e. that, for $s$, $P(n)$ was actually true
  - i.e. your smallest counter-example was not a counter-example

The same warning with Proof by Contradiction applies:
  - The contradiction must be reached through sound logic and not a mathematical error!

---

## Examples:

We already used the Well-Ordering principle when we proved $\sqrt{2}$ is not rational!
- Recall we defined rational numbers as the fraction of two integers, $n$ and $d$ in smallest terms
  - Because all rational numbers can be expressed in lowest terms
- We then showed that each of these numbers was even
  - this means that our counter-example was not a counter-example!
  - This is a Contradiction ⨳
- The set of counter-examples must be empty
- Review the following 3 slides from lecture 2. How would we reword this into a proof using the well-ordering principle template?
---
.left-column[
## Methods of Proof
### Proof by Contra- diction
]
.right-column[
If we assume a proposition to be false, and that assumption leads to a sound mathematical contradiction, the proposition must be true. 

Theorem: $\sqrt{2}$ is irrational
- Proof (By contradiction)
- Assume for the purpose of contradiction that $\sqrt{2}$ is rational
- $\sqrt{2} = \dfrac{n}{d}, n \in \mathbb{Z}, d \in \mathbb{Z}, d \neq 0$
- $\dfrac{n}{d}$ is a fraction in lowest terms, i.e. $n, d$ have no common divisors
]

---
.left-column[
## Methods of Proof
### Proof by Contra- diction
]
.right-column[
- $\sqrt{2} = \dfrac{n}{d}$
- $2 = \dfrac{n^2}{d^2}$
- $2d^2 = n^2$
- $2k = n^2$
- $n^2$ must be even. 
- $n$ must be even. (already proven)
- $2 \mid n$ [read: 2 divides n]
- $4 \mid n^2$ (axiomatic property of even squares)
- $4 \mid 2d^2$
- $2 \mid d^2$
- $d$ must be even.
]
---
.left-column[
## Methods of Proof
### Proof by Contra- diction
]
.right-column[
- $n$ must be even.
- $d$ must be even.
- If both $n$ and $d$ are even, then they have a common divisor, $2$
- $\dfrac{n}{d}$ is not in lowest terms
- this is a contradiction. ⨳
- $\therefore \sqrt{2}$ is irrational. $\square$

Caveat: Only works if the contradiction arrived at is through sound logic, not simply because you made a mistake!
]
---

## Proof - Sum of Cents - Well Ordering Principle

- Theorem: Any amount of money of least 8¢ can be made using 3¢ and 5¢ coins.
- Proof: By the well-ordering principle
- Suppose NOT any amount of money...
- Let $m$ be the least counter-example.
- Since $m$ is the least number which cannot be made of 3¢ and 5¢ coins, any number smaller than it can.
- $m \neq 8$, because $8¢ = 3¢ + 5¢$
- $m \neq 9$, because $9¢ = 3¢ + 3¢ + 3¢$
- $m \neq 10$, because $10¢ = 5¢ + 5¢$
- Hence, $m \geq 11$.

---
## Proof - Sum of Cents - Well Ordering Principle

- Hence, $m \geq 11$.
- For $m \geq 11, (m-3)$ is not a counter-example
- but then $m$ is also not a counter-example, since $(m-3)+3¢ = m$
- We have reached a contradiction. ⨳
- Thus, {counter-examples} is empty. 
- $\therefore$ by the well ordering principle, $P(n)$ is true. $\square$

---

## Proof - Sum of Cents - Strong Induction

Theorem: Any amount of money of least 8¢ can be made using 3¢ and 5¢ coins.

Proof: By strong induction

Induction Hypothesis: $P(n) := 8¢ + n$ can be made using $3$¢ and $5$¢ coins. $\forall n \gt 0 \in \mathbb{N}$.

- Base Cases:
  - $P(0): 8¢ = 3¢ + 5¢. \checkmark$
  - $P(1): 9¢ = 3¢ + 3¢ + 3¢. \checkmark$
  - $P(2): 10¢ = 5¢ + 5¢. \checkmark$
---
## Proof - Sum of Cents - Strong Induction

Induction Hypothesis: $P(n) := 8¢ + n$ can be made using $3$¢ and $5$¢ coins. $\forall n \gt 0 \in \mathbb{N}$.

Induction Step: $P(0) \wedge P(1) \wedge P(2) \wedge ... \wedge P(n) \Rightarrow P(n+1)$

- $\forall n > 2,$ we can make $P(n+1)$ with $P(n-2) + 3¢$.
- $\forall n > 0,$ we can 8 + n¢$.
- $\therefore P(n)$ is true by strong induction. $\square$

---

## Proof - Product of Primes by Well-ordering

Theorem: Every integer > 1 is a product of primes.
- We already proved this with strong induction. Let's prove it with Well Ordering Principle.
- Proof: By well-ordering principle, by contradiction
- Suppose {nonproducts} is non-empty. By W.o.P., there is at least $m \gt 1$ that is a non-product.
  - $m$ is not a prime. (as it would then also be a product of 1 prime)
  - $m$ must have positive divisors greater than 1.

---

## Proof - Product of Primes by Well-ordering

- So $m = j \times k$ for integers $j,k$ where $m \gt j,k > 1$.
  - Since, by the well ordering principle, $m$ is the smallest non-product of primes... 
    - Now $j,k < m$ so they both must be prime products.
    - $j = p_1 \times p_2 \times ... \times p_x$
    - $k = q_1 \times q_2 \times ... \times q_y$
- $m = j \times k = p_1 \times p_2 \times ... \times p_x \times q_1 \times q_2 \times ... \times q_y$
  - Thus, $m$ is a prime product, which is a contradiction. ⨳
- Thus, {nonproducts} is empty. $\square$

---
## Proof - Geometric Sums
Theorem:
$1 + r + r^2 + r^3 + ... + r^n = \dfrac{r^{n+1}-1}{r-1}$
- holds for all real numbers $r \geq 1$, all integers $n \in \mathbb{N}$
- Proof by the W.O.P.
- Let $m$ be smallest $n$ where this equality does not hold.
- $n=0$? 
- $\sum_{i=0}^0 r^i=r^0=1$
- $\dfrac{r^{0+1}-1}{r-1}=1$
- $1=1$ Holds.
  - so $m>0$
  
---
## Proof - Geometric Sums
- Since $m$ is the lowest example for which this does not hold, we assume the following equality holds:
- $1 + r + r^2 + r^3 + ... + r^{m-1} = \dfrac{r^{(m-1)+1}-1}{r-1}$
- $1 + r + r^2 + r^3 + ... + r^{m-1} = \dfrac{r^m-1}{r-1}$
- Lets add $r^m$ to both sides.
- LHS: $1 + r + r^2 + r^3 + ... + r^{m-1} + r^m$
- RHS: $\dfrac{r^m-1}{r-1} + r^m = \dfrac{r^m-1}{r-1} + \dfrac{r^{{m+1}} - r^m}{r-1} =\dfrac{r^{m+1}-1}{r-1} $

---
## Proof - Geometric Sums

- LHS: $1 + r + r^2 + r^3 + ... + r^{m-1} + r^m$
- RHS: $\dfrac{r^m-1}{r-1} + r^m = \dfrac{r^m-1}{r-1} + \dfrac{r^{{m+1}} - r^m}{r-1} =\dfrac{r^{m+1}-1}{r-1} $

- This is the identity we claimed did not hold. ⨳
- Thus the set of counterexamples must be empty.  $\square$
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