// Increment and Decrement operator
// Operator: x+ or +x or x-- or --X

// If used postfix, with operator after operand (for example, xH), postfix: will be see later on
// the increment operator increments and returns the value before incrementing.


var num=10;
var Nnum = num++;
var N_num = num++ + 5;
console.log(N_num);
console.log(Nnum);
console.log(num);

// If used prefix, with operator before operand (for example, +x),
// the increment operator increments and returns the value after incrementing.

var num=10;
var Nnum = ++num;

console.log(Nnum);
console.log(num);