// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// const hour = new Date().getHours(); 
// let greeting;
// console.log(hour);

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);


// var a=10
// var b=2

// if (a === 10) {
//   console.log("a is you given input");
//     if (b === 1) {
//     console.log("a is 1 and b is 2");
//     }
// } else {
//     console.log("a is not 1");
// }


// var age = 17;
// if(age >= 18){
// console.log("you are eligible to vote");
// }else{
// console.log("you are not eligible to vote");
// }

// ternary operator
// var age= 17;
// console.log((age >= 18) ? "you can vote" : "you can't vote");



// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);


// If the person’s age is less than 18, then he is not eligible to work. 
// If the person’s age is greater than or equal to 18,
// then the first condition fails. It will check the else statement.

var age = 15;
if (age < 18) {
  console.log("You are Minor.");
  console.log("Not Eligible to Work");
}
else {
  if (age >= 18 && age <= 60) {
    console.log("You are Eligible to Work.");
    console.log("Please fill in your details and apply");
  }
  else {
    console.log("You are too old to work as per the Government rules");
    console.log("Please Collect your pension!");
  }
}



// Find the Area of circle, triangle and rectangle?
var area = "square";
var PI = 3.142, l = 5, b = 4, r = 3;

  if (area = "circle") {
    console.log("the area of the circle is : " + PI * r ** 2);
  } 
  else if (area = "triangle") {
    console.log("the area of the triangle is: " + (l*b)/2)
  } 
  else if (area = "square") {
    console.log("the area of the square is : " + (lxb))
  } 
  else {
    console.log("please enter valid data");
  }