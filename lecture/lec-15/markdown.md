name: inverse
layout: true
class: center, middle, inverse

---

# ENSE 350: Math for Software Eng.

### Lecture 15: Iterative Methods: Solving Systems of Linear Equations 2

Adam Tilson, M.A.Sc., Engineer-in-Training

---

layout: false
.left-column[
  ## Agenda
]
.right-column[
1. Gauss-Jordan Elimination
2. Gauss-Jordan Elimination with Partial Pivoting and Matrix Inversion
3. LU Decomposition
]
---
## Gauss-Jordan Elimination

- Our first method to solve a system of linear equations: $A\vec{x}=\vec{b}$
- Algorithm
  - Create the Augmented matrix, $A.\vec{b}$
  - Forward Elimination
      - Working from the top down, perform `Row operations` to reduce $A$ to an upper triangular matrix with $1$s along the diagonal, known as `Reduced Row Echelon Form`, $U.\vec{b'}$
  - Back Elimination
      - Working from the bottom up, use `Row operations` to reduce $U$ to the identity matrix, allowing you to quickly find the missing values. $I.\vec{x}$

---

## Row Operations
- Three row operations are permitted:
1. Swap two rows
2. Multiply a row by a non-zero value
3. Add a constant multiple of a row to another

Note: These operations do not change the solution to the system, but may change determinant!

---
## Naive Algorithm
The naive algorithm for forward elimination is:
Select the `pivot` as $a\_{1,1}$
- Scale the pivot to $1$ by dividing Row(pivot)/pivot
- For each Row below the pivot, reduce the leading term in that row to 0 by...
  - Row($n$) = Row($n$) - $a\_{n,1} \cdot $Row(pivot)
- Recurse downwards by moving the pivot down and to the right by one.

---
## Example: No Row Swaps

$ 1x\_1 +   2x\_2 +   3x\_3 +   5x\_4 =   52$

$ 2x\_1 +   3x\_2 +   6x\_3 =   47$

$           8x\_2 +  -2x\_3 +  -5x\_4 =   25$

$-5x\_1 +  -2x\_2 +   6x\_3 +   5x\_4 =   9$

---
## Example: Augmented

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    2 & 3 & 6 & 0 & 47\\\\
    0 & 8 & -2 & -5 & 25\\\\
    -5 & -2 & 6 & 5 & 9\\\\
  \end{array}\end{bmatrix} 
$

---
## Forward Elimination

- Row(1) = Row(1) / 1
- Row(2) = Row(2) - Row(1) * 2 
- Row(4) = Row(4) - Row(1) * -5

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    0 & -1 & 0 & -10 & -57\\\\
    0 & 8 & -2 & -5 & 25\\\\
    0 & 8 & 21 & 30 & 269\\\\
  \end{array}\end{bmatrix} 
$

---
## Forward Elimination

- Row(2) = Row(1) / -1
- Row(3) = Row(3) - Row(2) * 8
- Row(4) = Row(4) - Row(2) * 8

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    0 & 1 & 0 & 10 & 57\\\\
    0 & 0 & -2 & -85 & -431\\\\
    0 & 0 & 21 & -50 & -187\\\\
  \end{array}\end{bmatrix} 
$

---
## Forward Elimination

- Row(3) = Row(3) / -2
- Row(4) = Row(4) - Row(3) * 21

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    0 & 1 & 0 & 10 & 57\\\\
    0 & 0 & 1 & 42.5 & 215.5\\\\
    0 & 0 & 0 & -942.5 & -4712.5\\\\
  \end{array}\end{bmatrix} 
$

---
## Forward Elimination

- Row(4) = Row(4) / 942.5

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    0 & 1 & 0 & 10 & 57\\\\
    0 & 0 & 1 & 42.5 & 215.5\\\\
    0 & 0 & 0 & 1 & 5\\\\
  \end{array}\end{bmatrix} 
$

---
## Backward Elimination

- Row(3) = Row(3) - Row(4) * 42.5

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    0 & 1 & 0 & 10 & 57\\\\
    0 & 0 & 1 & 0 & 3\\\\
    0 & 0 & 0 & 1 & 5\\\\
  \end{array}\end{bmatrix} 
$

---
## Backward Elimination

- Row(2) = Row(2) - Row(4) * 10

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 2 & 3 & 5 & 52\\\\
    0 & 1 & 0 & 0 & 7\\\\
    0 & 0 & 1 & 0 & 3\\\\
    0 & 0 & 0 & 1 & 5\\\\
  \end{array}\end{bmatrix} 
$

---
## Backward Elimination

- Row(1) = Row(1) - Row(4) * 5
- Row(1) = Row(1) - Row(3) * 3
- Row(1) = Row(1) - Row(2) * 2
 
$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    1 & 0 & 0 & 0 & 4\\\\
    0 & 1 & 0 & 0 & 7\\\\
    0 & 0 & 1 & 0 & 3\\\\
    0 & 0 & 0 & 1 & 5\\\\
  \end{array}\end{bmatrix} = I.\vec{x}
$

---
## Gauss-Jordan Warnings:

What can go wrong?
- Leading zeros where not expected!
- Rounding errors when dividing - Numerical stability!

---
## Partial Pivoting

We can prevent rounding and divide zero errors by first:

- Before scaling the pivot
- For all rows including the row of the pivot
  - Swap the row with the largest absolute value in the left-most term with the pivot row
  - If the starting pivot row is the largest, leave it.

---
## Partial Pivoting - Inversion

- We can use Gauss Jordan with Parial Pivoting to invert a matrix
  - We achieve this by starting with an identity matrix 
  - Performs updates to the identity matrix in parallel
  - Once complete, the identity matrix will have transformed into the inverse!

- Why is this useful? 
  - If we had different values for $\vec{b'}$, we'd only need to multiply by the inverse to get the new $\vec{x'}$

???

Why is it called partial pivoting? Because it only works on the rows! If you also swapped columns, this would be full pivoting.

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    0 & 20 & 10 & 30 & 5\\\\
    10 & 0 & 0 & 20 & 10\\\\
    20 & 10 & 20 & 0 & 15\\\\
    30 & 30 & 30 & 10 & 20\\\\
  \end{array}\end{bmatrix} 
$
$
RHS=\begin{bmatrix}
    1 & 0 & 0 & 0\\\\
    0 & 1 & 0 & 0\\\\
    0 & 0 & 1 & 0\\\\
    0 & 0 & 0 & 1\\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- Swap R1, R4

$A.\vec{b}=\begin{bmatrix}\begin{array}{cccc|c}
    30 & 30 & 30 & 10 & 20\\\\
    10 & 0 & 0 & 20 & 10\\\\
    20 & 10 & 20 & 0 & 15\\\\
    0 & 20 & 10 & 30 & 5\\\\
  \end{array}\end{bmatrix} 
$
$
RHS=\begin{bmatrix}
    0 & 0 & 0 & 1\\\\
    0 & 1 & 0 & 0\\\\
    0 & 0 & 1 & 0\\\\
    1 & 0 & 0 & 0\\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R1 = R1 / 30
- R2 = R2 - R1 * 10
- R3 = R3 - R1 * 20

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 1 & \frac{1}{3} & \frac{2}{3} \\\\
    0 & -10 & -10 & \frac{50}{3} & \frac{10}{3}\\\\
    0 & -10 & 0 & -\frac{20}{3} & \frac{5}{3}\\\\
    0 & 20 & 10 & 30 & 5\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    0 & 0 & 0 & \frac{1}{30} \\\\
    0 & 1 & 0 & -\frac{1}{3} \\\\
    0 & 0 & 1 & -\frac{2}{3}\\\\
    1 & 0 & 0 & 0\\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- Swap R2, R4

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 1 & \frac{1}{3} & \frac{2}{3} \\\\
    0 & 20 & 10 & 30 & 5\\\\
    0 & -10 & 0 & -\frac{20}{3} & \frac{5}{3}\\\\
    0 & -10 & -10 & \frac{50}{3} & \frac{10}{3}\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    0 & 0 & 0 & \frac{1}{30} \\\\
    1 & 0 & 0 & 0\\\\
    0 & 0 & 1 & -\frac{2}{3}\\\\
    0 & 1 & 0 & -\frac{1}{3} \\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R2 = R2 / 20
- R3 = R3 - R2 * -10
- R4 = R4 - R2 * -10

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 1 & \frac{1}{3} & \frac{2}{3} \\\\
    0 & 1 & \frac{1}{2} & \frac{3}{2} & \frac{1}{4}\\\\
    0 & 0 & 5 & -\frac{25}{3} & \frac{25}{6}\\\\
    0 & 0 & -5 & \frac{95}{3} & \frac{35}{6}\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    0 & 0 & 0 & \frac{1}{30} \\\\
    \frac{1}{20} & 0 & 0 & 0\\\\
    \frac{1}{2} & 0 & 1 & -\frac{2}{3}\\\\
    \frac{1}{2} & 1 & 0 & -\frac{1}{3} \\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R3 = R3 / 5
- R4 = R4 - R3 * -5

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 1 & \frac{1}{3} & \frac{2}{3} \\\\
    0 & 1 & \frac{1}{2} & \frac{3}{2} & \frac{1}{4}\\\\
    0 & 0 & 1 & -\frac{5}{3} & \frac{5}{6}\\\\
    0 & 0 & 0 & 40 & 10\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    0 & 0 & 0 & \frac{1}{30} \\\\
    \frac{1}{20} & 0 & 0 & 0\\\\
    \frac{1}{10} & 0 & \frac{1}{5} & -\frac{2}{15}\\\\
    1 & 1 & 1 & -1 \\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R4 = R4 / 40

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 1 & \frac{1}{3} & \frac{2}{3} \\\\
    0 & 1 & \frac{1}{2} & \frac{3}{2} & \frac{1}{4}\\\\
    0 & 0 & 1 & -\frac{5}{3} & \frac{5}{6}\\\\
    0 & 0 & 0 & 1 & \frac{1}{4}\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    0 & 0 & 0 & \frac{1}{30} \\\\
    \frac{1}{20} & 0 & 0 & 0\\\\
    \frac{1}{10} & 0 & \frac{1}{5} & -\frac{2}{15}\\\\
    \frac{1}{40} & \frac{1}{40} & \frac{1}{40} & -\frac{1}{40} \\\\
  \end{bmatrix} 
$

---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R3 = R3 - R4 * (-5/3)
- R2 = R2 - R4 * (3/2)
- R1 = R1 - R4 * (1/3)

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 1 & 0 & \frac{7}{12} \\\\
    0 & 1 & \frac{1}{2} & 0 & -\frac{1}{8}\\\\
    0 & 0 & 1 & 0 & \frac{5}{12}\\\\
    0 & 0 & 0 & 1 & \frac{1}{4}\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    -\frac{1}{120} & -\frac{1}{120} & -\frac{1}{120} & \frac{1}{120} \\\\
    \frac{1}{80} & -\frac{3}{80} & -\frac{3}{80} & -\frac{3}{80}\\\\
    \frac{7}{120} & -\frac{5}{120} & \frac{19}{120} & -\frac{11}{120}\\\\
    \frac{1}{40} & \frac{1}{40} & \frac{1}{40} & -\frac{1}{40} \\\\
  \end{bmatrix} 
$


---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R2 = R2 - R4 * 1
- R1 = R1 - R4 * (1/2)

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 1 & 0 & 0 & \frac{1}{6} \\\\
    0 & 1 & 0 & 0 & -\frac{1}{3}\\\\
    0 & 0 & 1 & 0 & \frac{5}{12}\\\\
    0 & 0 & 0 & 1 & \frac{1}{4}\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    -\frac{4}{60} & -\frac{1}{30} & -\frac{1}{6} & \frac{2}{15} \\\\
    -\frac{1}{60} & -\frac{1}{60} & -\frac{7}{60} & -\frac{1}{12}\\\\
    \frac{7}{120} & -\frac{5}{120} & \frac{19}{120} & -\frac{11}{120}\\\\
    \frac{1}{40} & \frac{1}{40} & \frac{1}{40} & -\frac{1}{40} \\\\
  \end{bmatrix} 
$


---
## Example - Gauss-Jordan with Partial Pivoting and Inversion

- R1 = R1 - R2 * 1

$\begin{bmatrix}\begin{array}{cccc|c}
    1 & 0 & 0 & 0 & \frac{1}{2} \\\\
    0 & 1 & 0 & 0 & -\frac{1}{3}\\\\
    0 & 0 & 1 & 0 & \frac{5}{12}\\\\
    0 & 0 & 0 & 1 & \frac{1}{4}\\\\
  \end{array}\end{bmatrix} 
$
$
\begin{bmatrix}
    -\frac{1}{20} & \frac{1}{20} & \frac{1}{20} & \frac{1}{20} \\\\
    -\frac{1}{60} & -\frac{1}{60} & -\frac{7}{60} & -\frac{1}{12}\\\\
    \frac{7}{120} & -\frac{5}{120} & \frac{19}{120} & -\frac{11}{120}\\\\
    \frac{1}{40} & \frac{1}{40} & \frac{1}{40} & -\frac{1}{40} \\\\
  \end{bmatrix} 
$


---
## Inversion outcome:

We have solved our current system:

$\begin{bmatrix}\begin{array}{cccc|c}
    x\_1 \\\\
    x\_2 \\\\
    x\_3 \\\\
    x\_4 \\\\
  \end{array}\end{bmatrix} = \begin{bmatrix}\begin{array}{cccc|c}
    \frac{1}{2} \\\\
    -\frac{1}{3}\\\\
    \frac{5}{12}\\\\
    \frac{1}{4}\\\\
  \end{array}\end{bmatrix} 
$

---
## Inversion outcome:

More importantly, if we need to re-use the system, e.g. compute a new $\vec{x'}$' from $\vec{b'}$, we can simply use our inverted matrix:

$\vec{x'} = A^{-1} \vec{b'}$

Where, 
$A^{-1} = \begin{bmatrix}
    -\frac{1}{20} & \frac{1}{20} & \frac{1}{20} & \frac{1}{20} \\\\
    -\frac{1}{60} & -\frac{1}{60} & -\frac{7}{60} & -\frac{1}{12}\\\\
    \frac{7}{120} & -\frac{5}{120} & \frac{19}{120} & -\frac{11}{120}\\\\
    \frac{1}{40} & \frac{1}{40} & \frac{1}{40} & -\frac{1}{40} \\\\
  \end{bmatrix} 
$

---
## Inversion outcome:

e.g. Resolve using $\vec{b} = <20, 30, 40, 50>$

$\begin{bmatrix}
    -\frac{1}{20} & \frac{1}{20} & \frac{1}{20} & \frac{1}{20} \\\\
    -\frac{1}{60} & -\frac{1}{60} & -\frac{7}{60} & -\frac{1}{12}\\\\
    \frac{7}{120} & -\frac{5}{120} & \frac{19}{120} & -\frac{11}{120}\\\\
    \frac{1}{40} & \frac{1}{40} & \frac{1}{40} & -\frac{1}{40} \\\\
  \end{bmatrix} \times \begin{bmatrix}
    20 \\\\
    30 \\\\
    40 \\\\
    50 \\\\
  \end{bmatrix} = \begin{bmatrix}
    1 \\\\
    -\frac{4}{3} \\\\
    \frac{5}{3} \\\\
    1 \\\\
  \end{bmatrix}
$

Depending on how we count, for our 4x4, this was about 240 operations for setup, and 28 to use.

---
## LU Decomposition

- Another method for solving systems of linear equations is LU decomposition
  - LU Decomposition breaks our $A$ matrix into $LU$, upper and lower triangular matrices
  - These can be used to approximate inversion and solve linear systems
- The L and U operations can be created using a simplified version of the elimination techniques we performed in gauss-jordan, with two major modifications:
  - In forward elimination, we will not reduce the first term of each row to 1
  - In the backward pass, we will perform backward substitution rather than backward elimination

???

Why do we do it differently?
I don't know, I've just always seen it done that way.
Presumably its faster for computers kinda thing.
Definitely it's going to be faster if you want to solve a number of equations with the same LHS but a different RHS
---
## LU Decomposition Theory

Forward Pass
- $A\vec{x} = \vec{b}$
- $LU\vec{x} = \vec{b}$
- $U\vec{x} = \vec{y}$
- $L\vec{y} = \vec{b}$

Use back Substitution to:
- Solve for $\vec{y}$: $L\vec{y} = \vec{b}$
- Solve for $\vec{x}$: $U\vec{x} = \vec{y}$

For additional values of $\vec{b}$, only need to do back substitution!

---
## L and U Matrix Construction

- The $U$ Matrix is created by performing forward naive gaussian elimination
  - Similar to Gauss-Jordan, except the leading term in each row is not first reduced to 1.
- The $L$ Matrix is created from the Identity Matrix, appending the coefficients computed when performing elimination operations on the corresponding element in the $U$ matrix, in that position.

- To simplify, we will not consider examples requiring row swaps, which requires keeping track of the permutation matrix, $P$.
---

## LU Example
$A=\begin{bmatrix}
    30 & 30 & 30 & 10\\\\
    20 & 10 & 20 & 0\\\\
    0 & 20 & 10 & 30\\\\
    10 & 0 & 0 & 20\\\\
 \end{bmatrix} 
$

$\vec{b}=\begin{bmatrix}
    20\\\\
    15\\\\
    5\\\\
    10\\\\
 \end{bmatrix} 
$

---

## LU Example
$L=\begin{bmatrix}
    1 & 0 & 0 & 0\\\\
    0 & 1 & 0 & 0\\\\
    0 & 0 & 1 & 0\\\\
    0 & 0 & 0 & 1\\\\
    \end{bmatrix} 
$
$U=\begin{bmatrix}
    30 & 30 & 30 & 10\\\\
    20 & 10 & 20 & 0\\\\
    0 & 20 & 10 & 30\\\\
    10 & 0 & 0 & 20\\\\
  \end{bmatrix} 
$

---

## LU Example

- R2 = R2 - R1 * (2/3)
- R4 = R4 - R1 * (1/3)

$L=\begin{bmatrix}
    1 & 0 & 0 & 0\\\\
    \frac{2}{3} & 1 & 0 & 0\\\\
    0 & 0 & 1 & 0\\\\
    \frac{1}{3} & 0 & 0 & 1\\\\
    \end{bmatrix} 
$
$U=\begin{bmatrix}
    30 & 30 & 30 & 10\\\\
    0 & -10 & 0 & -\frac{20}{3}\\\\
    0 & 20 & 10 & 30\\\\
    0 & -10 & 0 & \frac{50}{3}\\\\
\end{bmatrix} 
$

---

## LU Example

- R3 = R3 - R2 * (-2)
- R4 = R4 - R2 * (1)

$L=\begin{bmatrix}
    1 & 0 & 0 & 0\\\\
    \frac{2}{3} & 1 & 0 & 0\\\\
    0 & -2 & 1 & 0\\\\
    \frac{1}{3} & 1 & 0 & 1\\\\
    \end{bmatrix} 
$
$U=\begin{bmatrix}
    30 & 30 & 30 & 10\\\\
    0 & -10 & 0 & -\frac{20}{3}\\\\
    0 & 0 & 10 & \frac{50}{3}\\\\
    0 & 0 & -10 & \frac{70}{3}\\\\
\end{bmatrix} 
$

---

## LU Example

- R4 = R4 - R3 * (-1)

$L=\begin{bmatrix}
    1 & 0 & 0 & 0\\\\
    \frac{2}{3} & 1 & 0 & 0\\\\
    0 & -2 & 1 & 0\\\\
    \frac{1}{3} & 1 & -1 & 1\\\\
    \end{bmatrix} 
$
$U=\begin{bmatrix}
    30 & 30 & 30 & 10\\\\
    0 & -10 & 0 & -\frac{20}{3}\\\\
    0 & 0 & 10 & \frac{50}{3}\\\\
    0 & 0 & 0 & 40\\\\
\end{bmatrix} 
$

Decomposition is done. Took about 30 operations to decompose.

---

## LU Example - Back Substitution

To actually solve our system, we need to perform two rounds of back-substitution:

1. Solve for $\vec{y}$: 
   - $L\vec{y} = \vec{b}$
2. Solve for $\vec{x}$: 
   - $U\vec{x} = \vec{y}$

---

## LU Example - Back Substitution
$L\vec{y} = \vec{b}$
$L=\begin{bmatrix}
    1 & 0 & 0 & 0\\\\
    \frac{2}{3} & 1 & 0 & 0\\\\
    0 & -2 & 1 & 0\\\\
    \frac{1}{3} & 1 & -1 & 1\\\\
    \end{bmatrix} 
$
$\vec{b}=\begin{bmatrix}
    20\\\\
    15\\\\
    5\\\\
    10\\\\
 \end{bmatrix} 
$

  - $y_1 = 20 / 1 = 20$
  - $y_2 = (15-\frac{2}{3}y_1) / 1 = (15-\frac{40}{3}) / 1 = \frac{5}{3}$
  - $y_3 = (5+2y_2) / 1 = 5 + \frac{10}{3} = \frac{25}{3}$
  - $y_4 = (10-\frac{1}{3}y_1 - y_2 + y_3 )/ 1) = (10-\frac{20}{3} - \frac{5}{3} + \frac{25}{3})/ 1) = 10 $

---

## LU Example - Back Substitution
$U\vec{x} = \vec{y}$
$U=\begin{bmatrix}
    30 & 30 & 30 & 10\\\\
    0 & -10 & 0 & -\frac{20}{3}\\\\
    0 & 0 & 10 & \frac{50}{3}\\\\
    0 & 0 & 0 & 40\\\\
\end{bmatrix} 
$
$\vec{y}=\begin{bmatrix}
    20\\\\
    \frac{5}{3}\\\\
    \frac{25}{3}\\\\
    10\\\\
 \end{bmatrix} 
$
  - $x_4 = 10 / 40 = \frac{1}{4}$
  - $x_3 = (\frac{25}{3}-\frac{50}{3}x_4)/10 = (\frac{25}{3}-\frac{50}{12})/10 = \frac{5}{12}$
  - $x_2 = (\frac{5}{3} -(-\frac{20}{3})x_4 ) / -10 = (\frac{5}{3} +\frac{20}{12}) ) / -10 = -\frac{1}{3}$
  - $x_1 = (20 - 30x_2 - 30x_3 - 10x_4) / 30$
---
## LU Example - Back Substitution

$x_1 = (20 - 30x_2 - 30x_3 - 10x_4) / 30 $
$= (20 - (-10) -\frac{150}{12} - \frac{10}{4} ) / 30 = \frac{1}{2}$

$\begin{bmatrix}\begin{array}{cccc|c}
    x\_1 \\\\
    x\_2 \\\\
    x\_3 \\\\
    x\_4 \\\\
  \end{array}\end{bmatrix} = \begin{bmatrix}\begin{array}{cccc|c}
    \frac{1}{2} \\\\
    -\frac{1}{3}\\\\
    \frac{5}{12}\\\\
    \frac{1}{4}\\\\
  \end{array}\end{bmatrix} 
$

---
## LU Conclusion

- About 30 operations to decompose
- About 20 operations to back-substitute
- Overall much quicker than Gauss-Jordan!

- To re-solve the system, 
  - we save our $L$ and $U$, 
  - we don't need to decompose again, 
  - given some other RHS vector $\vec{b'}$ we perform both iterations of back-substitution to solve for $\vec{y'}$ and then $\vec{x'}$


---

### References

- Dr. Abdul Bais's ENSE 350 Slides
---

name: inverse
layout: true
class: center, middle, inverse
---
# Questions?
