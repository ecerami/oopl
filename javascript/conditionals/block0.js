'use strict';
let state = "NY";
let taxPercent;

// Note the use of triple equal ===
// This is a best practice, instead of using ==
// !== is also a best practice.
if (state === "FL") {
    taxPercent = 7;
} else if (state === "NY") {
    taxPercent = 8.875;
} else {
    taxPercent = 0;
}

console.log(taxPercent);

//  truthy v. falsy
//  falsy = false, 0, null, undefined, NaN, empty string
//  truthy = everything not falsy!

