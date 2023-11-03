'use strict';

let values = ['a', 'b', 'c', 'b', 'e'];

// We can use indexOf to find the index value
// of a specific element.
console.log(values.indexOf("a"))

// Note that this returns the first 'b'.
console.log(values.indexOf("b"))

//  For example
for (let item of values) {
    console.log(item);
}

