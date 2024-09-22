/* 
    When you talk about falsy in javascript, they are values that evaluate to false in some conditions statements,
    In javascript these are false, 0, "" (any empty strings), null, undefined, NaN. Falsy values are useful for checking
    conditions that has empty strings, missing data, or invalid operations.
*/

let inRelationship = NaN;  // NaN is a falsy value, so Age is treated as false
let numbers = 2024;
console.log(numbers + undefined);  // This would results in NaN because numbers is being add in a undefined number.

/*
    Falsy Values work in conditions, like an enabler, the code inside an 'if' code won't run if  the values inside
    is consider as falsy, and would run unless it's the opposite of falsy. Example below
*/


// 0 is consider as falsy
if (0) {
    console.log("This won't run because 0 is falsy.");
}
// an empty string with nothing inside it is also a falsy
if ("") {
    console.log("This won't run because an empty string is falsy.");
}
// a variable that has a null inside it would be falsy
let value = null;
if (value) {
    console.log("This won't run because null is falsy.
