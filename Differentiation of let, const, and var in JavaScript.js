/* 
    Java script had different ways to declaared variables, the commonly used are; let, const, var
    The three them are the same type but function differently. Advanced apology to my grammar mistakes.
*/

/*  Var has a function scope; it doesn't respect block scope like loops or conditionals (like if or for loops).
    It can still be accessed by outside blocks, like the example I provided below. I personally use var all the time
    cuz that was what I was used to (which is a bad practice)
*/

if (true) {
    var x = 10;
}

console.log(x); //This would still get the contained valued of x, which is 10, cuz the var can be accesed globally
var z = 30;
var z = 50; // Redeclare a variable is allowed in var, this would change the value of 30 to 50, this isn't possible in



/*
    "let" has a block scope which means that it can only within the block that enclosed by "{}". Let was used in modern code, something I should
    be using but forgot to. Const is almost the same thing about "let" 
*/

if (true) {
    let y = 20;
}
// console.log(y); // this would give an error  cuz it cannot be accessed outside the block, uncomment it to see the result




/*
    Best Practices
        Use let when the value of the variable might change during runtime.
        This is preferred for loop, and values that are reassigned within blocks.

        Use const when the value of the variable should not change.
        This is ideal for constants, object references, and values that should not be reassigned.

        Avoid var in modern JavaScript development as it has function scope, making it prone to bugs and is less predictable in block structures.
*/
