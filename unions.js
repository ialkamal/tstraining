"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number")
        result = n1 + n2;
    else
        result = n1.toString() + n2.toString();
    return result;
}
const combinedAges = combine(30, 50, "as-number");
console.log(combinedAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
