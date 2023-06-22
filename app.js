var eng = 85; //eng is identifier & equals to assignment operator
let math = 70;

// When to use const
// A new Array
// A new Object
// A new Function
// A new RegExp

// Variables defined with const have Block Scope
// Note: Const can not be redeclare
// BUT
// Change the elements of constant array
// Change the properties of constant object


const POM = 80;

// calculations
eng = 85 * 5;
math = 70-5;
// POM = 500;
// print
console.log("eng: "+eng);
console.log("math: "+math);
console.log("POM: "+POM);
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// variables in js
var x = 10;
{
var x = 2;
}
console.log("variabl: "+ x);

var varx = "John Doe";

var varx = 0;

console.log("var can be redeclare: " + varx);


// hoist in var is allowed
// carName = "Volvo";

carName = true;
console.log(typeof(carName));

// redeclaration in var is allowed
var xh = 2;     // Allowed
var xz = 3;     // Allowed
       // Allowed

console.log(`reeclaration: ${xh+xz}`);

// let in js
let y = 10;
{
    let y=2
}
console.log("let: "+ y)


// hoist in let is not allowed
car_Name = "Saab";
let car_Name = "Volvo";
console.log("Let: carName: " + car_Name);



