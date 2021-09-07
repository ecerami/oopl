'use strict';

// You can easily create an array of objects too.

// Here are three product objects.
let product1 = {
    productName: "Milk",
    price: 3.71
};

let product2 = {
    productName: "Eggs",
    price: 2.48
}

let product3 = {
    productName: "Bread",
    price: 3.21
}

//  Now, we put them together into an array.
let items = [product1, product2, product3];
for (let item of items) {
    console.log(item.productName + " = $" + item.price);
}