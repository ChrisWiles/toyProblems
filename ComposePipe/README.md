## Compose, Pipe

##

Implement the functions 

compose and 

pipe.

### Compose

##

Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of 

compose as moving **right to left** through its arguments.

##### Example

##

vargreet=function(name){ return'hi: '+ name;}
varexclaim=function(statement) { return statement.toUpperCase() +'!';}

var welcome =compose(greet, exclaim);
welcome('phillip'); //=&gt; 'hi: PHILLIP!'

### Pipe:

##

Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of 

pipe as moving **left to right** through its arguments.

##### Example

##

varadd2=function(number){ return number +2; }
varmultiplyBy3=function(number){ return number *3; }

pipe(add2, multiplyBy3)(5) //=&gt; 21pipe(add2, multiplyBy3, multiplyBy3)(5) //=&gt; 63
