name: inverse
layout: true
class: center, middle, inverse
---
# ENSE 350: Math for Software Eng.

### Lecture 7: Cryptography

Adam Tilson, M.A.Sc., Engineer-in-Training

---
layout: false
.left-column[
  ## Agenda
]
.right-column[
1. Prime Numbers
2. Cryptography: Turing V1
3. Modular Arithmetic Congruence
4. Multiplicative Inverses
5. Fermat's Little Theorem
6. Cryptography: Turing V2
7. Relatively Prime
8. Euler's Totient Function $\phi$
9. Euler's Theorem
10. RSA Cyrptosystem
]

---
layout: false
.left-column[
## Prime Numbers
]
.right-column[
- The building blocks of all integers
- Efficient algorithms exist to test if a number is prime
- $n = p \cdot q$
  - if $p$ and $q$ are large, then there is no efficient algorithm to find $p, q$ from $n$.
  - The inability to factor large primes is the foundation on which modern cryptography is based!
]
---
## Cryptography: Turing V1
- Beforehand - the sender and receiver agree on a secret key, $k$, which is a large prime number
- Encryption - the sender encrypts the message, $m$ by computing
$$m' = m \cdot k$$
- Decryption: the receiver decrypts $m'$ by computing
$$ \dfrac{m'}{k} = \dfrac{m' \cdot k}{k} = m $$
---
## How can we break turing V1
- To defeat this system, all we need to do is collect two messages...
$$m_1' = m_1 \cdot k$$
$$m_2' = m_2 \cdot k$$
$$k =\text{gcd}(m_1', m_2')$$
- We know GCD can be computed very efficiently
---
.left-column[
## Modular Arithmetic
### Congruence
]
.right-column[
$a$ is congruent to $b$ modulo $n$ iff $n \mid (a - b)$

i.e.

$a \equiv b (\text{mod } n)$
- $n$ is a restricted domain of numbers we'll use, e.g. $(\text{mod } 9)$ would contain only numbers {$0, 1, ..., 8$}
  - Any numbers outside of this range "roll over" until they are back in the range.
- $1 \equiv 10 (\text{mod } 9)$
- How do we quickly get a number in range? Take the remainder!
]
---
.left-column[
## Modular Arithmetic
### Remainder
]
.right-column[
$a \equiv b (\text{mod } n) \iff \text{rem}(a,n) = \text{rem}(b,n)$
- $a = q_1 n + r_1, 0 \leq r_1 \leq n$
- $b = q_2 n + r_2, 0 \leq r_2 \leq n$
- $a-b = q_1 n + r_1 - q_2 n - r_2$
- $a-b = (q_1 - q_2) n + (r_1 - r_2)$
- $n \mid (a-b)$
- $n \mid (q_1 - q_2) n + (r_1 - r_2)$
- $n \mid (r_1 - r_2)$
- $ r_1 - r_2 = 0$
- $ r_1 = r_2$
]
---
.left-column[
## Modular Arithmetic
### Remainder
]
.right-column[
- $a \equiv \text{ rem} (a,n) (\text{mod } n)$
- e.g. $15 \equiv \text{rem}(15,6) (\text{mod } 6)$
- $15 \equiv 3 (\text{mod } 6)$

Assume we are working in mod 5...
- {..., -10, -5, 0, 5, 10, ...}
- {..., -9, -4, 1, 6, 11, ...}
- {..., -8, -3, 2, 7, 12, ...}
- {..., -7, -2, 3, 8, 13, ...}
- {..., -6, -1, 4, 9, 14, ...}
- Any integers in each of these lines are equivalent
]
---
.left-column[
## Properties of Congruences (n $\geq 1$)
### Remainder
]
.right-column[
$1. a \equiv a (\text{mod }n)$

$2. a \equiv b (\text{mod }n) \Rightarrow b \equiv a (\text{mod }n)$

$3. (a \equiv b (\text{mod }n) \wedge b \equiv c (\text{mod }n))\Rightarrow a \equiv c (\text{mod }n)$

$4. a \equiv b (\text{mod }n) \Rightarrow a + c \equiv b + c (\text{mod }n)$

$5. a \equiv b (\text{mod }n) \Rightarrow a \cdot c \equiv b \cdot c (\text{mod }n)$

$6. (a \equiv b (\text{mod }n) \wedge c \equiv d (\text{mod }n) ) \Rightarrow$
$ a + c \equiv b + d (\text{mod }n)$

$7. (a \equiv b (\text{mod }n) \wedge c \equiv d (\text{mod }n) )\Rightarrow$
$ a \cdot c \equiv b \cdot d (\text{mod }n)$

]
---
## Demonstrations:

$3. (a \equiv b (\text{mod }n) \wedge b \equiv c (\text{mod }n))\Rightarrow a \equiv c (\text{mod }n)$

Assume $a \equiv b (\text{mod }n) \wedge b \equiv c (\text{mod }n)$

- $n \mid (a-b) \wedge n \mid (b-c)$
- $n \mid (a-b) + (b-c)$
- $n \mid a-c$
- $\iff a \equiv c (\text{mod }n)$

---
## Demonstrations:

$4. a \equiv b (\text{mod }n) \Rightarrow a + c \equiv b + c (\text{mod }n)$

- $n \mid (a-b)$
- $n \mid (a+c) - (b+c)$
- $a + c \equiv b+c(\text{mod }n)$
---
## Demonstrations:

$5. a \equiv b (\text{mod }n) \Rightarrow a \cdot c \equiv b \cdot c (\text{mod }n)$


- $n \mid (a-b)$
- $n \mid c(a-b)$
- $n \mid a \cdot c - b \cdot c$
- $a \cdot c \equiv b \cdot c (\text{mod }n)$
---
## Demonstrations:

$6. (a \equiv b (\text{mod }n) \wedge c \equiv d (\text{mod }n) ) \Rightarrow$
$ a + c \equiv b + d (\text{mod }n)$

- $a + c \equiv b+c(\text{mod }n)$
- $b + c \equiv b+d(\text{mod }n)$
- $a + c \equiv b+d(\text{mod }n)$
---
## Multiplicative Inverse:

Two numbers, when multiplied together, produce 1

- Real Numbers:
- $r \cdot \frac{1}{r} = 1$, if $r \neq 0$ 
- $3 \cdot \frac{1}{3} = 1$

- Integers:
- There are no multiplicative inverse for integers
- $\frac{1}{k}$ is not an integer
- However, they do exist in modulus arithmetic!

---
## Multiplicative Inverses in Modulus Arithmetic:
- Multiplicative inverses may exist in mod n...
- $7 \times 3 \equiv 1 (\text{mod }5)$
- $2 \times 3 \equiv 1 (\text{mod }5)$
- $7 \times 8 \equiv 1 (\text{mod }5)$

Lemma: If $p$ is prime and $k$ is not a multiple of $p$, then $k$ has a multiplicative inverse modulo $p$
---

## Multiplicative Inverses in Modulus Arithmetic:
Lemma: If $p$ is prime and $k$ is not a multiple of $p$, then $k$ has a multiplicative inverse modulo $p$
- $k \cdot t \equiv 1 (\text{mod }p)$
- $t$ exists if $k$ is not a multiple of $p$
- $\gcd(p, k) = 1$
- $1 = s \cdot p + t \cdot k$
- $s \cdot p = 1 - t \cdot k$
- $p \mid s \cdot p$
- $p \mid 1-t \cdot k$
- $k \mid t \equiv 1 (\text{mod }p)$
---
## Consequences 

Lemma: If $p$ is prime and $k$ is not a multiple of $p$, then $k$ has a multiplicative inverse modulo $p$

- if $p$ is not prime, every integer that is not a factor of $p$ has a multiplicative inverse.
- if $p$ is prime, every integer not a multiple of $p$ has a multiplicative inverse.
  - This second one is more useful to us!
---
## Cancellation of Common Terms 

In general, we cannot cancel common terms across an equivalency except in certain situations
- e.g. $2 \cdot 3 \equiv 4 \cdot 3 (\text{mod }6)$
- but $2 \not \equiv 4 (\text{mod }6)$

- e.g. $5 \cdot 4 \equiv 1 \cdot 4  (\text{mod }16)$
- but $5 \not \equiv 1 (\text{mod }16)$
---
## Cancellation of Common Terms

Lemma: Suppose $p$ is prime and $k$ is not a multiple of $p$. Then...

$ak \equiv bk  (\text{mod }p) \Rightarrow a \equiv b  (\text{mod }p)$

- $k$ has a multiplicative inverse, $k^{-1}$
- $ak \equiv bk  (\text{mod }p)$
- $akk^{-1} \equiv bkk^{-1}  (\text{mod }p)$
- $a \equiv b (\text{mod }p)$

---
## Fermat's Little Theorem
Theorem: If $p$ is prime and $k$ is not a multiple of $p$, then $k^{p-1} \equiv 1 (\text{mod }p)$

- $k^{p-1} \equiv 1 (\text{mod }p)$
- e.g. $3^4 \equiv 1 (\text{mod }5)$
- e.g. $6^4 \equiv 1 (\text{mod }5)$
- $k \cdot k^{p-2} \equiv 1 (\text{mod }p)$
- $k \cdot k^{-1} \equiv 1 (\text{mod }p)$
---
## Using Fermat's Little Theorem
- $p = 17$
- $k = 30 \equiv 13 (\text{mod }17)$
- $k^{-1} = ??$
- $13^{16} \equiv 1 (\text{mod }17)$
- $13 \cdot 13^{15} \equiv 1 (\text{mod }17)$
---
## Repeated Squaring
- $13 = 13 (\text{mod }17)$
- $13^2 = 169 \equiv \text{ rem}(169, 17) \equiv 16$
  - $13^2 = 16 (\text{mod }17)$
- $16^4 = 256 \equiv \text{ rem}(256, 17) \equiv 1$
  - $13^4 = 1 (\text{mod }17)$
- $13^8 = 1 (\text{mod }17)$
- $15 = 8 + 4 + 2 + 1$  
- $13^{15} = 13^{8} \cdot 13^{4} \cdot 13^{2} \cdot 13^{1}$
- $13^{15} = 1 \cdot 1 \cdot 16 \cdot 13 = 208 \equiv 4 (\text{mod }17)$
- $13 \cdot 4 \equiv 1 (\text{mod }17)$

---
## Pulverizer

Pulverizer ($17, 13$). ($a$ is the mod, $b$ is the coefficient)

|$x$|$y$|$x/y$|$r=x-q \cdot y$|
|---|---|---|---|
|$17$|$13$|$1 r 4$ |$4 = 17 - 1 \cdot 13$|
|$13$|$4$|$3 r 1$ |$1 = 13 - 3 \cdot 4$|
| | | |$1 = -3 \times 17 + 4 \times 13$|
- The $s \times a$ term becomes $-3 \times 17 \equiv 0 (\text{mod }17) $
- We're left with $ 4 \times 13 \equiv 1 (\text{mod }17) $
- $ 13^{-1} = 4 (\text{mod }17) $
- You will always arrive at such a term, but it might be more work than repeated squaring, and may need to add multiples of $17$ to make the second term positive

---
## Cryptography: Turing V2
Beforehand: The sender and receiver agree on a large prime, $p$, which may be made public. (This will be the modulus for all our arithmetic.) They also agree on a secret key $k \in 1, 2, ..., p-1$ with no common factor

Encryption: The message $m$ can be any integer in the set $0,1,2,...,p-1$; in particular, the message is no longer required to be a prime. The sender encrypts the message, $m$ to produce $m'$ by computing: $m' = \text{rem}(m \cdot k,p) \equiv m \cdot k (\text{mod }p)$

Decryption: $m' k^{-1} \equiv m (\text{mod }p)$
- $mk k^{-1} \equiv m (\text{mod }p)$
---
## Breaking Turing V2

How can we break Turing v2
- $k \in $ {$1, 2, ..., p-1$}
- $m \in $ {$1, 2, ..., p-1$}
- E: $mk \equiv m' (\text{mod }p)$
- D: $m'k^{-1} \equiv m (\text{mod }p)$

We would need to know both the unencrypted and encrypted versions to make any ground...
---
## Plain text attack

If we had both an encrypted and decrypted version of a word, we could solve for the missing variable
- e.g. Weather reports. Metadata.
- $m' \equiv mk (\text{mod }p)$
- $m^{-1}m' \equiv m^{-1}mk (\text{mod }p) \equiv k (\text{mod }p)$
---
## Defn: Relatively Prime

$a$ and $b$ are relatively prime iff $\text{gcd}(a,b) = 1$ 
- e.g. $\text{gcd}(5,16) = 1$
- e.g. $\text{gcd}(4,9) = 1$
- NOT an e.g. $\text{gcd}(3,9) = 3$
---
## Relatively Prime and Inverses
Let $n$ be a positive integer. If $k$ is relatively prime to $n$ then there exists an integer $k^{-1}$ such that:

$k \cdot k^{-1} \equiv 1 (\text{mod }n)$

I believe we've already covered this, just not formally like this.

Suppose we are working $(\text{mod }16)$:
Numbers relatively prime to $16: 1,3,5,7,9,11,13,15$
- $8$ numbers. We can compute this.

---
## Euler's Totient Function
- Returns the count of integers relatively prime to $n$, which are < $n$
- For a prime number, $n$, this is simply $n-1$, as all numbers are relatively prime to $n$

$\phi(n) = n(1-\frac{1}{p_1})(1-\frac{1}{p_2})...(1-\frac{1}{p_n})$
- Where $p_1, p_2$ are the prime factors.

- e.g.
- $n = 16 = 2 \cdot 2 \cdot 2 \cdot 2$
- $\phi(16) = 16(1-\frac{1}{2}) = 8 \checkmark$ 

---
## Euler's Totient Function

- $n = 200 = 2 \cdot 2 \cdot 2 \cdot 5 \cdot 5$
- $\phi(200) = 200(1-\frac{1}{2})(1-\frac{1}{5}) = 200(\frac{1}{2})(\frac{4}{5}) = 80$ 


- $n = 210 = 2 \cdot 3 \cdot 5 \cdot 7$
- $\phi(210) = 210(1-\frac{1}{2})(1-\frac{1}{3})(1-\frac{1}{5})(1-\frac{1}{7})$ 
- $= 210(\frac{1}{2})(\frac{2}{3})(\frac{4}{5})(\frac{6}{7}) = 48$ 
---
## Euler's Theorem
- Theorem: Suppose $n$ is a positive integer $k$ is relatively prime to $n$. Then:
$$ k^{\phi (n)} \equiv 1(\text {mod } n) $$
- examples:
  - $7^8 \equiv 1(\text {mod } 16) $
  - $7^{80} \equiv 1(\text {mod } 200) $
  - $11^{48} \equiv 1(\text {mod } 210) $
---
## Euler's Theorem
- Euler's Theorem is a generalization of Fermatt's Little Theorem:
  - $n = p \in $ primes
  - $\phi(n) = p (1 - \dfrac{1}{p}) = p - 1$
  - $k^{p-1} \equiv 1 (\text {mod } p)$
- When $n$ has two prime factors...
  - $n = pq, p, q \in $ primes
  - $\phi(n) = \phi(pq), p, q \in $ primes
  - $= pq (1 - \dfrac{1}{p}) (1 - \dfrac{1}{q})$
---
## Euler's Theorem
  - $= pq (1 - \dfrac{1}{p}) (1 - \dfrac{1}{q})$
  - $= pq (\dfrac{p-1}{p}) (\dfrac{q-1}{q})$
  - $= (p-1)(q-1)$

e.g.
- $p = 13$
- $q = 31$
- $\phi (pq) = 12 \cdot 30 = 360$
---
## RSA Cryptosystem
- Developed in 1977, By Rivest, Shamir and Adleman
- Turing V1: $m' = m \cdot k$
- Turing V2: $m' \equiv m \cdot k (\text {mod }  p)$
- RSA: $m' \equiv m^{e} (\text {mod }  n)$
- $m \equiv m'^{d} (\text {mod }  n)$

Why it works:
- $(m^{e})^{d} \equiv m (\text {mod }  n)$
  - if $de \equiv 1 (\text {mod }  \phi(n))$
---
### Two line proof

$ed \equiv 1 (\text {mod } \phi(n)) = 1 + k\phi(n), k \in \mathbb{Z}$
$m^{ed} = m^{1 + k\phi(n)} \equiv m(m^{k\phi(n)}) \equiv m(1)^k \equiv m(1) \equiv m (\text {mod } n)$

---
## RSA Cryptosystem

Beforehand

- The receiver creates a public key and a private key as follows
  1. Generate two distinct primes, $p$, $q$. These must be kept secret.
  2. Let $n = pq, \phi(n) = (p-1)(q-1)$
  3. Select an integer $e$ such that $\text{gcd}(e, \phi(n)) = 1$
    - The public key pair $(e,n)$ should be widely distributed
  4. Compute $d$ such that $de \equiv 1 (\text{mod } \phi(n))$
    - This can be done using the pulverizer
    - The private key pair $(d,n)$ must be kept secret!

---
## RSA Cryptosystem

Encoding:

- Given a message, $m$, the sender first checks that $\text{gcd}(m,n) = 1$
- The sender encrypts message $m$ to produce $m'$ using the public key:

  - $m' = \text{rem }(m^e, n))$
  - $m^e \equiv m' (\text{mod } n)$
---
## RSA Cryptosystem

Decoding:

- The receiver decrypts message, $m'$ back to message $m$ using the secret key:
  - $m = \text{rem}((m')^d,n)$
  - $(m')^d \equiv m (\text{mod }n)$

---
## RSA Example
1 Initial Setup:
- Let $p = 31$
- Let $q = 71$
- $n = p \cdot q = 2201$
- $\phi(n) = 30 \cdot 70 = 2100$

2 Public Key Generation:
- Let $e = 17$, (Any number relatively prime to $\phi(n)$)
- public key = $(17, 2201)$
---
## RSA Example
3 Private Key Generation (Pulverizer)
- $e \cdot d \equiv 1 (\text{mod }\phi(n))$
- $17d \equiv 1 (\text{mod }\phi(n))$
- $17d \equiv 1 (\text{mod } 2100)$
- $17^{2100} \equiv 1 (\text{mod }2100)$
- $17 \cdot 17^{2099} \equiv 1 (\text{mod }2100)$
- $d = 17^{2099}$
- We could use repeated squaring, or the pulverizer, to find $d$
- Let's use the pulverizer.
---
## RSA Example
- Pulverizer $(2100, 17)$ (Recall, $a$ is the mod, $b$ is the coefficient)

|$x$|$y$|$x/y$|$r=x-q \cdot y$|
|---|---|---|---|
|$2100$|$17$|$123 r 9$ |$9 = 2100 - 123 \cdot 17$|
|$17$|$9$|$1 r 8$ |$8 = 17 - 1 \cdot 9$|
||||$8 = -1 \cdot 2100 + 124 \cdot 17$|
|$9$|$8$|$1 r 1$|$1 = 9 - 1 \cdot 8$|
||||$1 = 2 \cdot 2100 - 247 \cdot 17$|

$17^{2099} = -247 (\text{mod }2100)$ is our inverse. 
- But we want our inverse to be positive!

---
## RSA Example
Effectively we are just adding multiples of $2100$ to make it positive.
- How does this work in terms of our linear combination?

- $1 = sa + tb$
- $1 = (sa + tb) + k(ba - ab), k \in \mathbb{Z}, k \geq 1$
- $1 = 2 \cdot 2100 - 247 \cdot 17$
- $   + -17 \cdot 2100 + 2100 \cdot 17$
- $1 = -15 \cdot 2100 + 1853 \cdot 17$

$1853$ is our inverse, the private key is $d=(1853, 2201)$
---
## RSA Example
4 Encryption, $m=3$
- $m'=3^{17} (\text{mod }2201)$
- Use repeated squaring...
- $3 \equiv 3 (\text{mod }2201)$
- $3^2 \equiv 9 (\text{mod }2201)$
- $3^4 \equiv 81 (\text{mod }2201)$
- $3^8 \equiv 2159 (\text{mod }2201)$
- $3^{16} \equiv 1764 (\text{mod }2201)$
- $3^{17} = 3 \cdot 3^{16} \equiv 3 \cdot 1764 (\text{mod }2201) \equiv 890 (\text{mod }2201)$
- Our encrypted message is $m' = 890$

---
## RSA Example
5 Decryption, $m'=890$
- $m'=890^{1853} (\text{mod }2201)$
- Use repeated squaring...
- $890 \equiv 890 (\text{mod }2201)$
- $890^{2} \equiv 1941 (\text{mod }2201)$
- $890^{4} \equiv 1570 (\text{mod }2201)$
- $890^{8} \equiv 1981 (\text{mod }2201)$
- $890^{16} \equiv 2179 (\text{mod }2201)$
- $890^{32} \equiv 484 (\text{mod }2201)$

---
## RSA Example
- $890^{64} \equiv 950 (\text{mod }2201)$
- $890^{128} \equiv 90 (\text{mod }2201)$
- $890^{256} \equiv 1497 (\text{mod }2201)$
- $890^{512} \equiv 391 (\text{mod }2201)$
- $890^{1024} \equiv 1012 (\text{mod }2201)$

$890^{1853} = 890^{1024}\cdot 890^{512}\cdot 890^{256}\cdot 890^{32}\cdot 890^{16}\cdot 890^{8}\cdot 890^{4}\cdot 890^{1}$
$\equiv 1012 \cdot 391 \cdot 1497 \cdot 484 \cdot 2179 \cdot 1981 \cdot 1570 \cdot 890 (\text{mod } 2201)$
$\equiv 3 (\text{mod } 2201)$

* Watch out for overflow! Take the mod after each multiplication to keep the numbers small!

---
## RSA Footnotes

### Signing Messages

By using the keys in reverse (encrypt with the private key, decrypt with the public key), this can used so that any person can verify the identity of the private key holder.
- This is called signing messages

---
## RSA Footnotes

### Why is it good

- It's trivial to go from $p,q$ to $n, \phi(n)$
- It's very difficult go from $n$ to $p,q$

### Why it's bad

- It's slow, even for fast computers
- However, it can be used to securely transmit keys for a quicker encryption method

---
### References

- Dr. Abdul Bais's ENSE 350 Slides
- Tom Leighton, and Marten Dijk. 6.042J Mathematics for Computer Science. Fall 2010, Lecture 4. Massachusetts Institute of Technology: MIT OpenCourseWare, https://ocw.mit.edu. License: Creative Commons BY-NC-SA.
---

name: inverse
layout: true
class: center, middle, inverse
---
# Questions?
