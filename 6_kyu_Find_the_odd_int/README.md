Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

``` javascript
const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
```

After having my mind blown by this solution and spending the next hour trying to really understand why this worked, I'd like to try to explain it:

^ is the XOR Bitwise Operator

From Wikipedia: https://en.wikipedia.org/wiki/Bitwise_operation#XOR

A bitwise XOR takes two bit patterns of equal length and performs the logical exclusive OR operation on each pair of corresponding bits. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1. In this we perform the comparison of two bits, being 1 if the two bits are different, and 0 if they are the same.
	16 ^ 6 -> 22

Looks like this when broken down into binary:

	/#  [32]  [16]  [8]  [4]  [2]  [1]
	16    0     1    0    0    0    0
	6     0     0    0    1    1    0
	22    0     1    0    1    1    0
If the column values are the same (ie: 1/1 or 0/0) then the result for that column is 0

If the column values are different (as in columns [16], [4], and [2]) then the result for that column is 1.

Because of this, "same" = 0 & "different" = 1, rule, if the same # occurs twice, it becomes cancelled out of the result.

	22 ^ 22 -> 0

	/#  [32]  [16]  [8]  [4]  [2]  [1]
	22    0     1    0    1    1    0
	22    0     1    0    1    1    0
	0     0     0    0    0    0    0
So for this Kata, only the # that shows up an ODD number of times will survive 'til the end.

	/#  [32]  [16]  [8]  [4]  [2]  [1]
	5    0     0     0    1    0    1 - ODD
	5    0     0     0    1    0    1 - EVEN
	0    0     0     0    0    0    0 - ^ result
	5    0     0     0    1    0    1 - ODD
