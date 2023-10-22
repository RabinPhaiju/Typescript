"use strict";
function holidaySales(product, sales, tax, discount) {
    let price = 0;
    if (product == 'sunglasses')
        price = 29;
    else if (product == 'eyeglasses')
        price = 99;
    else if (product == 'perfume')
        price = 59;
    return parseFloat((price * sales * (1 + tax) * (1 - discount)).toFixed(2));
}
const sunglasses = holidaySales('sunglasses', 100, 0.1, 0.2);
const perfume = holidaySales('perfume', 100, 0.1, 0.2);
console.log('glasses price is :', sunglasses);
console.log('perfume price is :', perfume);
const holidaySales1 = (product, sales, tax, discount) => {
    let price = 0;
    if (product == 'sunglasses')
        price = 29;
    else if (product == 'eyeglasses')
        price = 99;
    else if (product == 'perfume')
        price = 59;
    return parseFloat((price * sales * (1 + tax) * (1 - discount)).toFixed(2));
};
const multiply = (n) => n * n;
const result = multiply(2);
const myStr = (arg) => arg.toString();
function doSomething(num, operation) {
    switch (operation) {
        case 'add':
            return num + num;
        case 'subtract':
            return 12 - num;
        default:
            return 0;
    }
}
function someFunction() { }
function callAnotherFunc(func) {
    return func(10, 'ts');
}
let caller = callAnotherFunc((price, course) => `The ${course} has a price of ${price}`);
console.log(caller);
const result1 = (num) => `TS function ${num}`;
console.log(result1(3));
