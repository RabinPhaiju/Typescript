"use strict";
function getProductPrice(product) {
    if (typeof product === 'string') {
        return parseInt(product);
    }
    else {
        return product;
    }
}
const coursePrice1 = getProductPrice('10');
const coursePrice2 = getProductPrice(10);
let newDate = new Date();
if (newDate instanceof Date) {
    console.log('true');
}
else {
    console.log('false');
}
let someValue = null;
if (someValue == null) {
    console.log('true');
}
else {
    console.log('false');
}
let someValue1 = true;
if (!!someValue1) {
    console.log('true');
}
else {
    console.log('false');
}
let someArr = [1, 2, 3];
if (Array.isArray(someArr)) {
    console.log('true');
}
else {
    console.log('false');
}
let someObject = { name: 'ts' };
if ('price' in someObject) {
    console.log('true');
}
else {
    console.log('false');
}
