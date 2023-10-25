function getArrayItem<T>(item:Array<T>) : T {
    return item[0];
}

let number = getArrayItem<number>([1,2,3,4]);
console.log(number);

let strings2 = getArrayItem<string>(['ts','js']);
console.log(strings2);