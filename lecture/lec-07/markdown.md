name: inverse
layout: true
class: center, middle, inverse
---
# ENSE 350: Math for Software Eng.

### Lecture 7: Introduction to Number Theory

$\cdot$ Adam Tilson, M.A.Sc., P.Eng

---
layout: false
.left-column[
  ## Agenda
]
.right-column[
1. Lecture 5 Review
2. Divisibility
3. Linear Combinations 
4. Properties of GCD
5. Euclidean Algorithm
6. Die Hard Problem
7. Extended Euclidean
]
---
### Strong Induction Comparison

Ordinary Induction:

$\dfrac{P(0), \forall n \in \mathbb{N}, P(n) \Rightarrow P(n+1)}{\forall m \in \mathbb{N}, P(m)}$

Strong Induction:

$\dfrac{P(0)+, \forall n \in \mathbb{N}, P(0) \wedge P(1) \wedge P(2) \wedge ... \wedge P(n) \Rightarrow P(n+1)}{\forall m \in \mathbb{N}, P(m)}$

---

### When to use Strong Induction

- When there is no obvious connection between $P(n)$ and $P(n+1)$

- i.e. we can't use $P(n)$ directly to prove $P(n+1)$

- However, we may be able to use some combination of $P(0), P(1), P(2) ... P(n)$

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
  - e.g. start with a value smaller than $s$ satisfies $P(n)$
  - Using mathematical reasoning, show that $s$ can't be in $S$
  - i.e. your smallest counter-example was not a counter-example
  - Contradiction ⨳
- By the well-ordering principle, $S$ must be empty. $P(n)$ must be true for all $n$.

---
## Well-Ordering Principle - Contrapositive connection
- Recall in Induction we are proving: $P(n) \rightarrow P(n+1)$
- By the contrapositive: $\neg P(n+1) \rightarrow \neg P(n)$
- Shifting by one position: $\neg P(n) \rightarrow \neg P(n-1)$
- However, we want to find a contradiction
- Recall, to contradict an implication, the premise is true but the conclusion is false
    - If we assume for contradiction: $\neg P(n) \rightarrow P(n-1)$.
      - i.e. $P(n)$ is a counterexample, but $P(n-1)$ isn't
      - we are bound to eventually reach a contradiction!
- In this way, Well-Ordering Principle is a mirror to (strong) induction.
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

## Review: Invariant
- The invariant is some property of the system which is true in the start state of the system, and true in every legal move. 
- We can use this to prove if the system is in a winnable state, or an unwinnable state.

An example you may have already seen - A loop invariant (coding), a condition which is true at that start of every loop that a program runs. 

---

layout: false
.left-column[
## Divisibility
]
.right-column[
For this section of the course, unless otherwise specified, assume we are only discussing integers $\mathbb{Z}$

$a$ divides $b \iff a \cdot k = b$ for some $k$  
$a \mid b \iff a \cdot k = b$ for some $k$  

- e.g. $2 \mid 6  \iff 2k = 6. (k=3) $ 
- e.g. $3 \mid 0  \iff 3k = 0. (k=0) $
- e.g. $n \mid 0  \iff n \cdot k = 0. (k=0) $ 
  - ~~0 divides all numbers?~~
  - all numbers divide $0$ !
- A pizza with 0 slices can be divided by any number of people, but they all get 0 slices. Sad.
]
---
layout: false
.left-column[
## Divisibility
### Properties
]
.right-column[
1: If $a \mid b$, then $a \mid b \cdot c $ for all $ c$
- assume $b = k \cdot a$
- $bc = (k \cdot c) \cdot a$
- $bc = (k_1) \cdot a$
- $\therefore a \mid b \cdot c$

2: If $a \mid b$, and $b \mid c$, then $a \mid c$
- $b = k_1 \cdot a$
- $c = k_2 \cdot b$
- $c = k_1 \cdot k_2 \cdot a$
- $c = k_3 \cdot a$
- $\therefore a \mid c$
]

---
layout: false
.left-column[
## Divisibility
### More Properties
]
.right-column[
3: If $a \mid b$, and $a \mid c$, then $a \mid s \cdot b + t \cdot c $ for all $s$ and $t$.
- $b = k_1 \cdot a$
- $c = k_2 \cdot a$
- $s\cdot b + t \cdot c = s \cdot k_1 \cdot a + t \cdot k_2 \cdot a$
- $s\cdot b + t \cdot c = (s \cdot k_1 + t \cdot k_2) \cdot a$
- since $ (s \cdot k_1 + t \cdot k_2)$ is an integer
  - $s\cdot b + t \cdot c = k_3 \cdot a$
  - $a \mid s \cdot b + t \cdot c$
  
4: For all $c \neq 0, a \mid b \iff c\cdot a \mid c \cdot b$
- Can prove with the same principles
]


---
layout: false
.left-column[
## Divisibility
### Division Theorem
]
.right-column[
Let $n$ and $d$ be integers such that $d \gt 0$. There there exists a unique pair of integers, $q, r$, such that $n = q \ \cdot d + r, 0 \leq r \lt d$
- $n := $numerator
- $d := $denominator
- $q := $quotient
- $r := $remainder
  - if $r = 0, d \mid n$
- e.g.  $7 = 3 \cdot 2 + 1$
- not an e.g.  $9 = 2 \cdot 2 + 5$
  - why? Because $5 \not \lt 2$
- e.g. $9 = 4 \cdot 2 + 1.$
]


---
layout: false
.left-column[
## Divisibility
### Integer Linear Combi- nations
]
.right-column[
$s \cdot a + t \cdot b$
- e.g., $a = 3, b = 5$
- Linear combinations of a and b:
  - $3 \cdot 3 - 6 \cdot 5$
  - $4 \cdot 3 + 2 \cdot 5$
  - $-17 \cdot 3 - 18 \cdot 5$
  ]


---
layout: false
.left-column[
## Divisibility
### Greatest Common Divisor (GCD)
]
.right-column[
- The greatest number which divides both terms
- $\text{gcd}(14,7) = 7$
  - $7 \mid 7, 7 \mid 14$
- $\text{gcd}(9, 3) = 3$
- $\text{gcd}(11,0) = 11$
  - $11 \mid 11, 11 \mid 0$
- $\text{gcd}(n, 0) = n$
- $\text{gcd}(6, 11) = 1$
  - these numbers are called "relatively prime"
- $\text{gcd}(2 \cdot 7 \cdot 3, 2 \cdot 3 \cdot 5)$
  - $2 \cdot 3 = 6$
]


---
layout: false
.left-column[
## Divisibility
### GCD and Integer Linear Combi- nations
]
.right-column[
Theorem: The greatest common divisor of $a$ and $b$ is equal to the smallest positive linear combination of $a$ and $b$.

e.g.: $\text{gcd}(4,8) = 4$
- $-2 \cdot 4 + 1 \cdot 8 = 0$ (not positive)
- $2 \cdot 4 + 1 \cdot 8 = 12$ (not gcd)
- $-1 \cdot 4 + 1 \cdot 8 = 4$ (gcd)
]

---
## GCD and Integer Linear Combination (Bezout)
Proof: By Well Ordering Principle
- Let $m :=$ the smallest positive linear combination
  - $m = sa+tb$
  - $s$ and $t$ are set such that $m$ is the smallest positive result.
- We will show that $m \mid a, m \mid b$
- We will then show, for any $c, c \mid a, c \mid b, c \leq m$
- Thus $m = \text{gcd}(a,b)$
---
## GCD and Integer Linear Combination (Bezout)
Lemma: $m \mid a$
- Dividing $a$ by $m$ with the division theorem yields:
- $a = mq + r, 0 \leq r \lt m$
- $r = a - qm$
- $r = a - q(sa+tb)$
- $r = a - qsa + qtb$
- $r = a(1 - qs) + qtb$
- $r = s'a + t'b$
- Since $m$ is the smallest possible linear combination, $r$ must be zero. Thus $m \mid a. \square$
- The same procedure may be followed to show $m \mid b$.
---
## GCD and Integer Linear Combination (Bezout)
- Lemma: Common factor $c \leq m$
- Assume common factor, $c \mid a$, $c \mid b$
- $m = sa + tb$
- $m = cua + cvb$
- $m = c(ua + vb)$
- $m = ck$
- $c \mid m$.
- Thus $c \leq m. \square$
---
## GCD and Integer Linear Combination (Bezout)
Wrap up
- We showed $m \mid a, m \mid b$
  - translation: $m$ is a common divisor
- We showed for any $c, c \mid a, c \mid b, c \leq m$
  - translation: $m$ is the greatest common divisor
- thus $m = \text{gcd}(a,b) \square$ 
---

.left-column[
## GCD
### Properties of the GCD
]
.right-column[
1: Every common divisor of $a$ and $b$ divides $\text{gcd}(a,b)$

- this was $c$ in our prior proof.

2: $\text{gcd}(ka, kb) = k \cdot \text{gcd}(a,b)$ for all $k \gt 0$
- $\text{gcd}(a,b) = sa + tb$
- $\text{gcd}(ka,kb) = ksa + ktb$
- $ = k(sa + tb)$
- $ = k \cdot \text{gcd}(a,b)$
]
---


.left-column[
## GCD
### Properties of the GCD
]
.right-column[
3: If $\text{gcd}(a, b) = 1,$ and $\text{gcd}(a,c) = 1,$ then $ \text{gcd}(a,bc) = 1$
- $1 = sa + tb$
- $1 = ua + vc$
- $1 = (sa+tb)(ua+vc)$ for some $s, t, u, v$
- $1 = saua +savc + tbua +tbvc$
- $1 = a(sau + svc + tbv) + (bc)(tv)$
- $1 = as_1 + (bc) t_1$
]
---


.left-column[
## GCD
### Properties of the GCD
]
.right-column[
4: If $a \mid bc$ and $\text{gcd}(a, b) = 1$, then $a \mid c$
- if $\text{gcd}(a,b) = 1$, $a$ and $b$ have no common factors besides $1$.
  - $a$ and $b$ are relatively prime
- thus, the only way $a$ could divide $bc$, is if $a$ divided $c$.
]
---
.left-column[
## GCD
### Properties of the GCD
]
.right-column[
5: Euclid's Algorithm:
- $\text{gcd}(a, b) = \text{gcd}(b, \text{rem}(a,b))$
  - Using the division theorem:
  - $a = qb + r$
  - $r = a - qb$
  - Any common divisor of $a$ and $b$ would also divide $r$
  - $\text{gcd}(a,b) = \text{gcd}(a,r) = \text{gcd}(b,r)$
]
---
.left-column[
## GCD
### Euclid's Algorithm
### Example
]
.right-column[
- $\text{gcd}(771,100) = \text{gcd}(100,71)$
- $\text{gcd}(100,71) = \text{gcd}(71, 29)$
- $\text{gcd}(71,29) = \text{gcd}(29,13)$
- $\text{gcd}(29,13) = \text{gcd}(13,3)$
- $\text{gcd}(13,3) = \text{gcd}(3,1)$
- $\text{gcd}(3,1) = \text{gcd}(1,0) = 1$

- Why is this useful? Because we can implement it in code!
- But we can actually take this further!
]
---
.left-column[
## The Die Hard Problem
]
.right-column[
In Die Hard 3, John MacClane must disarm a bomb by placing exactly 4 gallons of water on the scale. He is given only a 5 and 3 gallon jug. 

![](die-hard.png)

We can solve it by trial and error, but is there a systematic approach to solve it?
]
???
You thought with all my games I was JigSaw, but I was actually Simon from Die Hard 3

---

## The Die Hard Problem

- Define our system as a state machine
  - let $a$ be the size of the smaller jug
  - let $b$ be the size of the larger jug
  - let $x$ be the number of gallons in the smaller jug
  - let $y$ be the number of gallons in the larger jug.

- State
$(x,y)$

---

## The Die Hard Problem

Operations:

- Emptying
  - $(x,y) \rightarrow (0,y)$
  - $(x,y) \rightarrow (x,0)$

- Filling
  - $(x,y) \rightarrow (a,y)$
  - $(x,y) \rightarrow (x,b)$

---

## The Die Hard Problem

Operations:

- Pouring:
- We can pour in either direction
- Two outcomes per direction
  - a: we pour all the contents of one jug to the other
  - b: we pour some of the contents of one jug into the other, until it is full, and then we stop, with some water remaining in the first jug

We cannot pour part of a jug from one to the other!

---
## The Die Hard Problem

- $(x,y) \rightarrow (0, x+y), x+y \leq b$
- $(x,y) \rightarrow (x-(b-y)), b) = (x+y-b),b); x+y \geq b$
- $(x,y) \rightarrow (x+y, 0), x+t \leq a$
- $(x,y) \rightarrow (a, x+y-a), x+y \geq a$

Solution, using these operations

- $a=3, b=5, (0,0)$

- $(0,0) \rightarrow (0,5) \rightarrow (3,2) \rightarrow (0,2) \rightarrow (2,0)$
- $(2,0) \rightarrow (2,5) \rightarrow (3,4)\rightarrow (0,4)$. done.
---
### What if...
- The mastermind genius villain was having an off day, and instead gave a 3 gallon and a 6 gallon jug. Could we still make 4 gallons?
- No...
- Why?
  - We can only make 0, 3, 6.
  - How can we investigate further?
---
### Exploring the System
- What do we know about this system? Do we have an invariant?
- Lemma: The amount of water in each jug is a linear combination of the capacities of each jug
  - We could prove this by cases 
    - show each operation can be broken down into $sa+tb$.
- Theorem: The $\text{gcd}(a,b)$ is equal to the smallest positive linear combination of $a$ and $b$. (From the Text)
- Theorem: An integer is a linear combination of $a, b$ iff it is a multiple of $\text{gcd}(a,b)$
  - $\text{gcd}(a,b) = sa + tb$
  - $k \text{gcd}(a,b) = ksa + ktb$
---
### Consequence
This means that...
- $\text{gcd}(3,5) = 1$
- $4 = 1 \cdot 4 = 2 \cdot 5 - 2 \cdot 3 \checkmark$
  
Vs...

- $\text{gcd}(3,6) = 3$
- $4 = 3 \cdot ??? \times$

Take away: as long as the GCD between two numbers is 1, any number can be made as a linear combination of them!
---
### The Extended Euclidean Algorithm (Pulverizer)
It would be nice if there was a way to reliably calculate the $s,t$ in the equations:
$\text{gcd}(a,b) = sa+tb$
- In particular, the lowest combination.
- e.g. compute $\text{gcd}(a,b)$, $s$, $t$, such that $\text{gcd}(220, 41) = s \cdot 220 + t \cdot 41$

Turns out there is, and it's thousands of years old!

---
### Pulverizer Algorithm
- Rewrite the terms of the GCD as $x, y$ such that $x > y$
- compute $x / y$, in terms of quotient, $q$, remainder, $r$
- Since we know $x = q \cdot y + r$ 
  - Rewrite as $r = x - q \cdot y$
  - Rewrite in terms of $a,b$ substituting computed values
  - Recurse, such that $x \leftarrow y$, $y \leftarrow r$ (This part is just Euclid's)

Let's do an example!
- e.g. compute $s$, $t$, such that $\text{gcd}(220, 41) = s \cdot 220 + t \cdot 41$

---

|$x$|$y$|$x/y$|$r=x-q \cdot y$|$s$|$t$|
|---|---|---|---|---|---|
|$220$|$41$|$5 r 15$ |$15 = 220 - 5 \cdot 41$|$1$|$-5$|
|$41$|$15$|$2 r 11$ |$11 = 41 - 2 \cdot 15$|||
|    |    | |$11 = 41 - 2 \cdot (220 - 5 \cdot 41)$|||
|    |    | |$11 = -2 \cdot 220 + 11 \cdot 41 $|$-2$|$11$|
|$15$|$11$|$1 r 4$ |$4 = 15 - 1 \cdot 11$|||
| |  || $4 = (220 - 5 \cdot 41) - 1 \cdot (-2 \cdot 220 + 11 \cdot 41)$|||
| |  || $4 = 3 \cdot 220 - 16 \cdot 41$|$3$|$-16$|
|$11$|$4$|$2 r 3$|$3 = 11 - 2 \cdot 4$|||
|||| $3 = (-2 \cdot 220 + 11 \cdot 41) - 2 \cdot (3 \cdot 220 - 16 \cdot 41)$|||
|||| $3 = -8 \cdot 220 + 43 \cdot 41$|$-8$|$43$|
|$4$|$3$ |$1 r 1$| $1 = 4 - 1 \cdot 3$|||
|||| $1 = (3 \cdot 220 - 16 \cdot 41) - 1 \cdot (-8 \cdot 220 + 43 \cdot 41)$|||
|||| $1 = 11 \cdot 220 - 59 \cdot 41$|$11$|$-59$|


---
### References

- Dr. Abdul Bais's ENSE 350 Slides
- Tom Leighton, and Marten Dijk. 6.042J Mathematics for Computer Science. Fall 2010, Lecture 4. Massachusetts Institute of Technology: MIT OpenCourseWare, https://ocw.mit.edu. License: Creative Commons BY-NC-SA.

???
We're on week 3, how are they only on Lecture 4?!
---

name: inverse
layout: true
class: center, middle, inverse
---
# Questions?
