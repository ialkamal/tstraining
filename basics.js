"use strict";
function add(n1, n2, showResult) {
    //console.log(typeof number1);
    if (!showResult)
        return n1 + n2;
    console.log(n1 + n2);
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const result = add(number1, number2, printResult);
//console.log(result);
