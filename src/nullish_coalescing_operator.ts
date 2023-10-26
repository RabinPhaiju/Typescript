console.log(('' && 5));
console.log((0 && 5));
console.log((false && 5));
console.log((null && 5));
console.log((undefined && 5));
console.log((NaN && 5));

console.log(('hi' && 'hey'));
console.log(('hi' && 0));
console.log((false && 0));


console.log(('' || 5));
console.log((0 || 5));
console.log((false || 5));
console.log((null || 5));
console.log((undefined || 5));
console.log((NaN || 5));

console.log(('hi' || 'hey'));
console.log(('hi' || 0));
console.log((false || 0));


console.log(('' ?? 5));
console.log((0 ?? 5));
console.log((false ?? 5));
console.log((null ?? 5));
console.log((undefined ?? 5));
console.log((NaN ?? 5));

console.log(('hi' ?? 'hey'));
console.log(('hi' ?? 0));
console.log((false ?? 0));

// 2.
function myTestFunc1(arg:Array<string> | undefined): number | undefined {
    // return arg != undefined ? arg.length : undefined
    return arg && arg?.length;
}
console.log(myTestFunc1(['1','2','3']));

// 3.
function myTestFunc2(arg:number | undefined): number {
    return arg || 0
}

console.log(myTestFunc2(undefined));

// 4.
function setCoursePrice2(price: number | undefined): number {
    return price ?? 9.99;
}
console.log(setCoursePrice2(undefined));