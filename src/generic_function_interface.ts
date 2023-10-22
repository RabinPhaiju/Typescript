function getArraylength<T>(elements: T[]): number {
    return elements.length;
}

// let arrLength = getArraylength<number>([1,2,3]);
// let arrLength = getArraylength(['js','ts']);
let arrLength = getArraylength([1,2,3]);


// Generic Function Type
type FuncType<T> = (elements:Array<T>) => number


// this function is not generic, it only works with number.
let getArrayLength1 :FuncType<number> = (element) => element.length;