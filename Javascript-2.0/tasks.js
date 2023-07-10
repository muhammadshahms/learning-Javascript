// Question:

// "Imagine you are building a simple calculator program using JavaScript. The program should take two predefined numbers, perform addition and multiplication operations on them, and display the result. Additionally, it prompts the user to enter a number and uses it to calculate the final result. Your task is to write the JavaScript code for this calculator program.

// Declare two variables, number and anotherNumber, and assign them the values 4 and 5, respectively.
// Write a function named add that takes two parameters n1 and n2 and returns their sum.
// Write a function named multiply that takes two parameters n1 and n2 and returns their product.
// Create a variable named sum and assign it the result of calling the add function with number and anotherNumber as arguments.
// Use the prompt function to ask the user to enter a number and store the value in a variable.
// Create a variable named product and assign it the result of calling the multiply function with the user-entered number and sum as arguments.
// Log the value of product to the console.
// Your goal is to write the complete JavaScript code that implements the above calculator program. Make sure to follow the given instructions and prompt the user for input."

var number = 4;
var anotherNumber = 5
function add(n1, n2) {
    return n1 + n2
};
function multiply(n1, n2) {
    return n1 * n2
};
sum = add(number, anotherNumber);
var product = multiply(prompt("Enter a number:"), sum);
console.log(product);




//Task 2: "Write a JavaScript function that calculates the total price of a product, 
// including the GST (Goods and Services Tax). The function should take two parameters:.


// Function to calculate total price with GST
function calculateTotalPrice(productPrice, gstRate) {
    // Calculate GST amount
    var gstAmount = (productPrice * gstRate) / 100;

    // Calculate total price including GST
    var totalPrice = productPrice + gstAmount;

    // Return the total price
    return totalPrice;
}

// Example usage
var productPrice = 100; // Price of the product
var gstRate = 18; // GST rate in percentage

// Calculate total price with GST
var totalPrice = calculateTotalPrice(productPrice, gstRate);

// Display the total price
console.log("Total Price (including GST): $" + totalPrice.toFixed(2));



// Task 3:
// Question 1:
// Write a for loop that prints the numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// Question 2:
// Write a for loop that calculates the sum of all even numbers from 1 to 100 and displays the result.

//

//
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum of even numbers from 1 to 100:", sum);
// Question 3:
// Write a for loop that iterates backward from 10 to 1 and prints the numbers in descending order.

//

//
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
// Question 4:
// Write a for loop that prints the multiplication table of a given number. For example, if the number is 5, the output should be:

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50


var number = 5;
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    console.log(number + " x " + i + " = " + result);
}
// Question 5:
// Write a for loop that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (denoted as 5!) is calculated as 5 x 4 x 3 x 2 x 1.

var number = 5;
var factorial = 1;
for (var i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of", number + ":", factorial);

// Task 4
// if conditions questions
// Question 1:
// Write an if condition that checks if a given number is positive, negative, or zero. Display a message indicating the number's sign.

var number = -7;

if (number > 0) {
    console.log("Number is positive.");
} else if (number < 0) {
    console.log("Number is negative.");
} else {
    console.log("Number is zero.");
}
// Question 2:
// Write an if condition that checks if a given string is a palindrome. A palindrome is a word or phrase that reads the same backward as forward. Display a message indicating whether the string is a palindrome or not.

var string = "racecar";
var reversedString = string.split("").reverse().join("");

if (string === reversedString) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
// Question 3:
// Write an if condition that checks if a given number is a prime number. Display a message indicating whether the number is prime or not.

var number = 17;
var isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("The number is prime.");
} else {
    console.log("The number is not prime.");
}
// Question 4:
// Write an if condition that checks if a given year is a leap year or not. If it is a leap year, display a message indicating that it has 366 days; otherwise, display a message indicating that it has 365 days.

var year = 2024;
var isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
}

if (isLeapYear) {
    console.log("The year has 366 days (leap year).");
} else {
    console.log("The year has 365 days (non-leap year).");
}
// Question 5:
// Write an if condition that checks if a given number is a perfect square. Display a message indicating whether the number is a perfect square or not.

var number = 16;
var squareRoot = Math.sqrt(number);

if (squareRoot % 1 === 0) {
    console.log("The number is a perfect square.");
} else {
    console.log("The number is not a perfect square.");
}