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
