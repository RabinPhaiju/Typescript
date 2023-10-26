"use strict";
function promoteProduct12(name, price, moreInfo) {
    return {
        name,
        price,
        moreInfo
    };
}
let promoteProduct1 = promoteProduct12('ts', 12, { released: true, begin: true, level: 'begin' });
console.log(promoteProduct1);
let courseName13 = 'ts';
let coursePrice13 = 12;
