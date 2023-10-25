"use strict";
function getArrayItem(item) {
    return item[0];
}
let number = getArrayItem([1, 2, 3, 4]);
console.log(number);
let strings2 = getArrayItem(['ts', 'js']);
console.log(strings2);
