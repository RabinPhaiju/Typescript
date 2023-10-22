"use strict";
function printHello() {
    console.log('Hello Typescript');
}
printHello();
let productCategory;
let shoppingCart = (category) => {
    productCategory = category;
};
console.log(shoppingCart('Electronics'));
let movieName = undefined;
