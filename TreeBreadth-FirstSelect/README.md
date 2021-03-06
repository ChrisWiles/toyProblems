## Tree Breadth-First Select

Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns 

true.

**Example:**

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  return value % 2;
}) //=&gt; [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
}) //=&gt; [2, 3]

For more information on breadth-first traversal, visit this link: [Breadth-First Traversal of a Tree.](https://www.cs.bu.edu/teaching/c/tree/breadth-first/)
