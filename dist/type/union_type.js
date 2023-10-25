"use strict";
let firstPassword = 123;
firstPassword = '123';
let tip = (bill, tipPercent) => {
    if (typeof tipPercent === 'number') {
        return bill * tipPercent;
    }
    else {
        let calculateTip = parseFloat(tipPercent) / 100;
        return bill * calculateTip;
    }
};
console.log(tip(10, '2'));
console.log(tip(10, '20 percent'));
const productId = () => 11;
const productId1 = () => 12;
let id1 = productId1();
