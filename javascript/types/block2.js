'use strict';
// Various String Operations
let firstName = "Ethan";
let lastName = "Cerami";

// String concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

// Various String Operations
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.repeat(10))

// Substrings
let message = "Hello, World!!!!";
console.log(message.substr(7, 6))

// String length
console.log(message.length)

// Strange stuff in Javascript
// This results in 2122, NOT 214.
let message1 = "212";
let message2 = 2;
let message3 = message1 + message2;
console.log(message3);