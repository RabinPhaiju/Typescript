"use strict";
let prodcutName;
prodcutName = (product, price) => {
    return `'${product}, ${price}`;
};
console.log(prodcutName('TS Optional', 1));
let productName1;
productName1 = (product, price = 0) => {
    return `'${product}, ${price}`;
};
console.log(productName1('TS Optional'));
