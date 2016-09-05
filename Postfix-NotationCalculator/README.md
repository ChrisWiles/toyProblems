## Postfix-Notation Calculator

##

Postfix notation (also known as [Reverse Polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)) is an alternative way of representing algebra expressions. For example, take the following expression:

2 + 5 * 8

This “normal” notation that we see everyday is called **infix** notation. Infix notation places its math operators **in-between** the numbers.

Infix notation also has order of operations. The previous example will be interpreted as 

2 + (5 * 8), because multiplication comes before addition. This makes it difficult to write a program to parse infix expressions.

In contrast, **postfix notation** is much easier to parse, albeit it looks weird at first. Postfix notation places math operators **after** the numbers. For example, the previous _infix_ example can be re-written in _postfix_ notation like this:

2 5 8 * +

This expression should be read from left to right, one number / operator at a time. In doing so, you must keep a stack of numbers that wait to be operated on.

Here is a run-through of parsing this example:

inputs remainingnumber stackaction

 2 5 8 * + begin

 5 8 * + 2 push 2 to stack

 8 * + 2 5 push 5 to stack

 * + 2 5 8 push 8 to stack

 + 2 40 pop two numbers off the stack, multiply, push result to stack

   42 pop two numbers off the stack, add, push result to stack

   42 Done! 42 is the answer.

Implement this algorithm in your solution.

#### Examples

##

InputOutput

 **inputs:**  
"1 5 8 * +" 41

 **inputs:**  
"1 5 8 + *" 13

 **inputs:**  
"100 2 / 25 +" 75
