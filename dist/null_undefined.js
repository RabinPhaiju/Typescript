"use strict";
let discount;
function specialDiscount(holidaySeason) {
    if (holidaySeason) {
        discount = 0.4;
    }
    else {
        discount = 0.2;
    }
    return discount;
}
let holidayDiscount = specialDiscount(true);
console.log(holidayDiscount);
let notSure1 = undefined;
let notSure2 = null;
let notSure3 = 123;
let notSure4 = null;
let vague = undefined;
let vague1 = true ? true : undefined;
function nullNarrow(arg) {
    if (arg === undefined || isNaN(parseInt(arg.toString()))) {
        return undefined;
    }
    else {
        return parseInt(arg);
    }
}
