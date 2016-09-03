## Rotate Matrix

##

Write a function that rotates a NxN matrix 90 degrees clockwise.  
A matrix, also called a 2-D array, is simply an array of arrays of values.

**2x2 MATRIX EXAMPLE:**

[ [1, 2],  
[3, 4] ]

Rotated:

[ [3, 1],  
[4, 2] ]

**4x4 MATRIX EXAMPLE:**

[ [ 1, 2, 3, 4],  
[ 5, 6, 7, 8],  
[ 9, “A”,”B”,”C”],  
[“D”,”E”,”F”,”G”] ]

Rotated:

[ [“D”, 9, 5, 1],  
[“E”, “A”, 6, 2],  
[“F”,”B”, 7, 3],  
[“G”,”C”, 8, 4] ]

**EXTRA CREDIT**  
- Make your function operate on rectangular matrices (MxN rather than NxN).  
- Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)

**_Important note:_**  
_In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of**rows** and n is the number of **columns**. So an [i][j] address in a matrix will be i places down, and j places over. This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down._

#### Examples

##

InputOutput

 **matrix:**  
[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ] [ [ "D", 9, 5, 1 ], [ "E", "A", 6, 2 ], [ "F", "B", 7, 3 ], [ "G", "C", 8, 4 ] ]

 **matrix:**  
[ [ 1 ] ] [ [ 1 ] ]

 **matrix:**  
[ [ 1, 2 ], [ 3, 4 ] ] [ [ 3, 1 ], [ 4, 2 ] ]

 **matrix:**  
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
