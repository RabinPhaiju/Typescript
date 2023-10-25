"use strict";
function itemOrItems(items) {
    if (Array.isArray(items)) {
        return items.length;
    }
    else {
        return items.productName.length;
    }
}
console.log(itemOrItems({ productName: 'ts' }));
console.log(itemOrItems([{ productName: 'ts' }, { productName: 'js' }]));
function productViews(arg) {
    if ((typeof arg === 'number' && arg > 0) || arg === true) {
        return true;
    }
    else {
        return false;
    }
}
function productViews1(arg) {
    return arg === true
        ? true
        : (typeof arg === 'number' && arg > 0);
}
function arrayOrItem(elements) {
    if (Array.isArray(elements)) {
        return elements[0];
    }
    else {
        return elements;
    }
}
