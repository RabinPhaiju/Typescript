const numbers2 : Array<number> = [2,1,4,5];

numbers2.push(6);
numbers2.sort();

const numbers3 = numbers2;
// storing by reference.

numbers3.push(7); // reflect to original array.

console.log(numbers2)
console.log(numbers3)

// readonly array ----------
const numbers4: ReadonlyArray<number>  = [3,4,7,4];
// numbers4.push(9) // not available
