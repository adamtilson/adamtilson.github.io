name: inverse
layout: true
class: center, middle, inverse

---

# ENSE 350: Math for Software Eng.

### Lecture 17: Solutions to Non-Linear Equations

Adam Tilson, M.A.Sc., Engineer-in-Training

---

layout: false
.left-column[
  ## Agenda
]
.right-column[
1. Root Finding
2. Newton-Raphson
3. Secant
4. Bisection
]
---
## Goal

The purpose of this chapter is to explore iterative numerical methods for finding roots to non-linear equations
- Recall, with linear and polynomial functions, we can find roots by solving for $f(x) = 0$.
- $x^3-8x^2-35x+150$
- $(x-3)(x+5)(x-10)=0$
- $x=3, x=-5, x=10$

However, with non-linear equations, this process may not be so trivial
- We will investigate three methods to find roots without needing to explicitly find them symbolically

---
## Newton-Raphson

![](derivation-1.png)


---
## Newton-Raphson

![](derivation-2.png)

---
## Newton-Raphson

![](derivation-3.png)

---
## Newton-Raphson

- $\tan\theta = \frac{f(x_1)}{x_1 - x_2} $
  
- $f'(x_1) = \frac{f(x_1)}{x_1 - x_2} $

- $x_1 - x_2 = \frac{f(x_1)}{f'(x_1)}  $
  
- $x_2 = x_1 - \frac{f(x_1)}{f'(x_1)}  $

---

## Newton-Raphson Iteration

![](iteration-1.png)

---
## Newton-Raphson Convergence

![](iteration-2.png)

---
## Newton-Raphson

The Newton-Raphson method attempts to find the root by:
- Finding the equation for the derivative symbolically, $f'(x)$
- Create an initial guess, $x_0 = \text{value}$.
- Iteratively...
  - Find a better value for the guess using the computation $x_{i+1}=x_i - \frac{f(x_i)}{f'(x_i)}$
  - Compute the Absolute Relative Approximate Error $\epsilon_a$ and if it is below a certain threshold, $\epsilon_s$, stop. Otherwise, keep iterating!

---
### Newton-Raphson Advantages

- If able to converge, it typically converges quickly (quadratic rather than linear)!
- Only requires one guess
- Doesn't need to bracket the solution

---
### Newton-Raphson Disadvantages

- Near inflection points, the algorithm may overshoot and diverging away from the solution
- May oscillate near local minima and maxima
- Division by zero
- May jump some roots
- Need to compute / code the symbolic derivative

---
## Netwton-Raphson - Divergence
![](divergence.png)
---
## Newton-Raphson - Oscillation
![](oscillation-1.png)
---
## Newton-Raphson - Oscillation
![](oscillation-2.png)
---
## Newton-Raphson - Oscillation
![](oscillation-3.png)
---
## Newton-Raphson - Jumping a Root
![](jump-root-1.png)
---
## Newton-Raphson - Jumping a Root
![](jump-root-2.png)
---
## Newton-Raphson - Jumping a Root
![](jump-root-3.png)
---
## Secant Method
The Newton-Raphson method depended on computing the tangent of the function, using the first derivative.

But what if we are unable to compute it?

We may instead approximate the derivative as such:

$f'(x\_i) = \frac{f(x\_i) - f(x\_{i-1})}{x\_i - x\_{i-1}}$

???

Trivia - the Secant method actually predates Newtons method by over 3000 years!
---
## Secant Derivation

![](secant-fig.png)

---
## Secant Algorithm

The Secant method attempts to find the root by:
- Create two initial guesses, $x_0, x_1$.
- Iteratively...
  - Let the newer guess become the older guess
  - Find a better value for the newer guesses using the $x\_{i+1}=x\_i - \frac{f(x\_i)(f(x\_i) - f(x\_{i-1}))}{x\_i - x\_{i-1}}$
  - Compute the Absolute Relative Approximate Error $\epsilon_a$ and if it is below a certain threshold, $\epsilon_s$, stop. Otherwise, keep iterating!

---
### Secant Discussion
- Unlike Newton-Raphson, do not need to take a symbolic derivative
- Unlike Newton-Raphson, need two guesses
- Otherwise, convergence behaviour is similar to Newton-Raphson, including:
  - Generally speedy convergence, (not quite quadratic, but faster than linear) excepting:
      - Overshoot and diverge
      - Division by Zero
      - Oscillation
      - Root Jumping
- Basically should only be used when determining the symbolic derivative is not feasible
---
## Bisection Method

The Bisection Method attempts to find a root through a process akin to binary search
- Create an interval bounded by two values, $x_l$ (left) and $x_r$ (right) which bracket a solution
  - If this interval is ascending, $x_l \lt x_r$, specifically, $x_l \lt 0, x_r \gt 0$
  - If this interval is descending, $x_l \gt x_r$, specifically, $x_l \gt 0, x_l \lt 0$

---
## Bisection Method

- Find the midpoint, $x_m$, and evaluate it at $f(x_m)$
  - If the interval is ascending
      - If $f(x_m)$ is less than 0, set $x_l \leftarrow x_m$
      - If $f(x_m)$ is greater than 0, set $x_r \leftarrow x_m$
  - If the interval is descending
      - If $f(x_m)$ is less than 0, set $x_r \leftarrow x_m$
      - If $f(x_m)$ is greater than 0, set $x_l \leftarrow x_m$
- Repeat until the Absolute Relative Approximate Error $\epsilon_a$ between successive $x_m$'s, is less than the stopping error $\epsilon_s$  
  - Our root is the final midpoint $x_m$
---
## Bisection Example
![](bisection-1.png)
---
## Bisection Example
![](bisection-2.png)
---
## Bisection Example
![](bisection-3.png)
---
## Bisection Example
![](bisection-4.png)
---
## Bisection Example
![](bisection-5.png)
---
## Bisection Example
![](bisection-6.png)
---
## Bisection Example
![](bisection-7.png)
---
## Bisection Example
![](bisection-8.png)
---
## Bisection Example
![](bisection-9.png)
---
## Bisection Example
![](bisection-10.png)

---
### Bisection Discussion

- Always converges
- Always makes consistent progress towards a root
- Typically slower than other methods discussed
- Better performance when our guesses our approximately equal distanced from the root - the more skewed to one side, the slower the convergence, particularly bad if one of the guesses is very close.
- Unable to find roots that do not cross the x-axis
- Can be fooled by asymptotes on the x-axis

---
### Root Not Finable by Bisection

![](cant-find-bisection.png)

---

### Fooled by asymptote

![](fooled-by-asymptote.png)

---
## To come

In the lab
- We will be implementing all three methods

In the class
- Worked examples by hand.

---

### References

- Dr. Abdul Bais's ENSE 350 Slides
---

name: inverse
layout: true
class: center, middle, inverse
---
# Questions?
