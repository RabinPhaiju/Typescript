"use strict";
let mySet = new Set([1, 2, 3]);
mySet.add(4);
console.log(mySet);
console.log(mySet.has(5));
let mixedSetData = new Set([1, 'hi']);
console.log(mixedSetData.size);
