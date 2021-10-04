// Here we explicitly define variables with types
// This is unique to TypeScript and not possible in JavaScript.
var firstName = "Ethan";
var totalPrice = 159.22;
var activeUser = false;
console.log("Hello, " + firstName + "!");
console.log("Total Price:  " + totalPrice);
console.log("User is active:  " + activeUser);
// The following code will result in error
// activeUser = "Ethan";
firstName = 22;
