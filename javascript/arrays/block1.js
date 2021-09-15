'use strict';

// Example of Array Slicing
let values = ['a', 'b', 'c', 'd', 'e'];
let values_slice = values.slice(2, 4);

console.log(values);
console.log(values_slice);

// Example #1 of Array Splicing.
// Splicing for deleting a run of elements.
values = ['a', 'b', 'c', 'd', 'e'];
values.splice(2, 2);
console.log(values);

// Example #2 of Array Splicing.
// Splicing for inserting an element.
values = ['a', 'b', 'c', 'd', 'e'];
values.splice(1, 2, "foo");
console.log(values);
