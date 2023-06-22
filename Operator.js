// 3 Comparison operators
// A comparison operator compares its operands and
// returns a logical value based on whether the comparison is true.

var a = 30;
var b = -20;
// Equal (=)
// console.log(a == b);
// // Not equal (!=)
// console.log(a != b);
// // Greater than (>)
// console.log(a > b);
// // Greater than or equal (≥)
// console.log(a >= b);
// // Less than (<)
// console.log(a < b);
// // Less than or equal (<)
// console.log(a <= b);

// Logical AND (&)
// The logical AND (&) operator (logical conjunction) for a set of
// operands is true if and only if all of its operands are true.
// console.log(a > b & b > -50 & b < 0);

// Logical OR (II)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true.
// console.log(a > b || b > -50 || b < 0);

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation)
// takes truth to falsity and vice versa.
// console.log(!((a>0) || (b<0)));
// console.log(!true);


// String Concatenation(operators)
// console.log("hello"+"world");

// Swaping
var a = 5;
var b = 10;
// output b=5; a=10
console.log("value of a: " + a,"\nvalue of b: " + b);
var c = b; //c = 10
b = a; // b = 5;
a = c;
console.log("\nAfter Swaping");
console.log("value of a: "+ a);
console.log("value of b: " + b);