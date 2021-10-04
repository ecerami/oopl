// Here we explicitly define variables with types
// This is unique to TypeScript and not possible in JavaScript.
let firstName: string = "Ethan";
let totalPrice: number = 159.22;
let activeUser: boolean = false;

console.log("Hello, " + firstName + "!");
console.log("Total Price:  " + totalPrice);
console.log("User is active:  " + activeUser);

// The following code will result in error
// activeUser = "Ethan";
// firstName = 22