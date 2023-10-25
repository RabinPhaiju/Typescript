let firstPassword: number | string = 123;
firstPassword = '123';

// -----------------------

let tip = (bill: number, tipPercent: string | number):number => {
    if(typeof tipPercent === 'number') {
        return bill * tipPercent;
    } else {
        let calculateTip : number = parseFloat(tipPercent) / 100;
        return bill * calculateTip;
    }
}

console.log(tip(10, '2'));
console.log(tip(10, '20 percent'));


// 1.
const productId = (): string | number => 11;
// let id:number = productId(); // cannot assing type string | number in type number;

// 2.
const productId1 = (): number => 12;
let id1 : string | number = productId1();