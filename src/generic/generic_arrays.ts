let numbers1: Array<number> = [1,2,3]; // number[]
let strings1: Array<string> = ['ts','js'];

let regularArr: number[] = numbers1;

let boolValues: Array<boolean> = [true,true];

let nestedArr: Array<Array<number>> = [
    [1,2],
    [3,4]
];

let mixedArr: Array<string | number> = [1,'ts'];

// 1. -- can add number in list of strings. strict. to match js packages.
const productArray1 : Array<string> = ['name','price','sales','category'];
const mixedproductArray1 : Array<string | number> = productArray1;
mixedproductArray1.push(3);

console.log(mixedproductArray1);
