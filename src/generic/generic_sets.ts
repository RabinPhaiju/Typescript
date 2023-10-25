let mySet = new Set([1,2,3]);

// mySet.add('hi');
mySet.add(4);

console.log(mySet);
console.log(mySet.has(5));

// 
let mixedSetData: Set<string | number> = new Set([1,'hi']);
// let myMixedArr3: (string | number)[]= mixedSetData;
// let mySet2: Set<number> = [1,2,3];

console.log(mixedSetData.size);