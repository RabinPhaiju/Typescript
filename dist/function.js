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
const holidaySales1 = (product, sales, tax, discount, dept) => {
    let price = 0;
    if (product == 'sunglasses')
        price = 29;
    else if (product == 'eyeglasses')
        price = 99;
    else if (product == 'perfume')
        price = 59;
    return parseFloat((price * sales * (1 + tax) * (1 - discount)).toFixed(2));
};
const sunglasses1 = holidaySales1('sunglasses', 100, 0.1, 0.2, 'mini market');
console.log('glasses price is :', sunglasses1);
