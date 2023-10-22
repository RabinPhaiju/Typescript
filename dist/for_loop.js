"use strict";
let nums = [1, 2, 3, 4];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
let mixData1 = [1, 'hello', 2, 'world'];
for (let entry of mixData1) {
    console.log(entry);
}
for (let [index, item] of mixData1.entries()) {
    console.log(`${index}- ${item}`);
}
for (let key in mixData1) {
    console.log(`key: ${mixData1[key]} ${typeof mixData1[key]}`);
}
