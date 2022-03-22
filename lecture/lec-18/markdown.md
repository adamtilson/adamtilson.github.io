name: inverse
layout: true
class: center, middle, inverse

---

# ENSE 350: Math for Software Eng.

### Lecture 18: Iterative Methods for Root Finding

Adam Tilson, M.A.Sc., Engineer-in-Training

---

layout: false
.left-column[
  ## Agenda
]
.right-column[
1. Problems
]
---
Let's work through some practice problems!

Q1. Find a non-zero solution to the equation:

$$\sin x = x^2$$

---
Q2. Use the bisection method to find where the polynomial

$$2x^3-4x^2+3x$$

crosses the line

$$y=2$$

Perform 7 iterations, but keep track of midpoints and give the best approximation you found.

---
Q3. Use the Newton-Raphson method to provide compute the root of the function

$$f(x)=e^{-0.5x}(4-x)-2$$

Compare guesses of 2, 6, 8. Explain the algorithm behavior.

---
Q4. Find the lowest positive root of the function:

$$f(x)=\frac{7 \sin(x)}{e^x}-1$$

By conducting graphical analysis, determine which method(s) would be inappropriate and use an appropriate method.

---
Q5. An iterative method for computing an inverse is based on the function:
$$f(x) = a - \frac{1}{x} = 0$$, where x is the inverse of a.

a) Using the Newton-Raphson method, and simplifying, show why this formulation may be beneficial for computers.

b) Find the inverse of 2.5, using an initial guess of 0.1. Perform four iterations and compute the per. abs. rel. true error.

c) Using the Secant method, and simplifying, determine if this method would have the same benefits as Newton-Raphson.
---

Q6. A start-up company is manufacturing boutique hand-held gaming computers. The company estimates that the total profit versus number of units sold is given by the function:

$$f(n) = 40n^{1.5}-875n+35000$$

Find the minimum number of units the company must sell to make a profit.

---

### References

"Dr. K. Dow, Dr. S. Adeeb, Dr. L. Westover, Dr. Y. Li, W. Qiu" (2022). "Introduction to Numerical Analysis for Engineers". Retrieved from https://engcourses-uofa.ca 

---

name: inverse
layout: true
class: center, middle, inverse
---
# Questions?
