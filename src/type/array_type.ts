// Array of numbers
let numbers: number[] = [1,2,3,4];
// let numbers1: number[] = [1,2,3,4,'hi'];

// Array of Strings
let strings: string[] = ['hello', 'world'];

// Union
let p_id: string | number = 22;

// Array of Strings and Numbers
let mixData: (string|number)[] = [1, 'hello'];

// Array of Strings and Numbers and Boolean
let mixDatas: (string|number|boolean)[] = [1, 'hello', true];

// Array of Any
let arr:any[] = [1,true,'hello',null]

// Nested numbers of arrays
let nestedArray: number[][] = [
    [1, 2, 3,4], 
    [4, 5, 6], 
    [7, 8, 9]
];

// Nested strings of arrays
let nestedStrings: string[][] = [
    ['hello', 'world'], 
    ['foo', 'bar'], 
    ['baz', 'qux'],
    ['quux']
];


// Nested string and numbers of arrays
let nestedData: (string | number)[][] = [
    [1, 'hello', 2, 'world'],
    ['foo', 3, 'bar'],
    [4, 'baz', 'qux'],
    ['quux', 5],
    ['foo'],
    [6],
];