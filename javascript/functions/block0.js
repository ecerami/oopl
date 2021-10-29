'use strict';

//  Example Function with parameters and return value.
function add (a, b) {
    return (a + b)
}

let sum = add (2, 4);
console.log(sum);

//  You may also see function expressions like this.
let adder = function (a, b) {
    return (a + b)
}
sum = adder (2, 4);
console.log(sum);

