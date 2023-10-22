// Function Declration
function holidaySales(product:string, sales:number,tax:number,discount:number):number{
    let price:number = 0;
    if(product == 'sunglasses') price = 29;
    else if(product == 'eyeglasses') price = 99;
    else if(product == 'perfume') price = 59;
    return parseFloat((price * sales * (1 + tax) * (1 - discount)).toFixed(2));
}

const sunglasses:number = holidaySales('sunglasses', 100, 0.1, 0.2);
const perfume:number = holidaySales('perfume', 100, 0.1, 0.2);
console.log('glasses price is :',sunglasses);
console.log('perfume price is :',perfume);



// Function Expression
const holidaySales1=(
    product:string, 
    sales:number,
    tax:number,
    discount:number,
    // dept:string
    ):number=>{
    // let department: string = 'Tech';
    let price:number = 0;
    if(product == 'sunglasses') price = 29;
    else if(product == 'eyeglasses') price = 99;
    else if(product == 'perfume') price = 59;
    return parseFloat((price * sales * (1 + tax) * (1 - discount)).toFixed(2));
}

// const sunglasses1:number = holidaySales1('sunglasses', 100, 0.1, 0.2,'mini market');
// console.log('glasses price is :',sunglasses1);


// 1.
const multiply = (n:number):number => n*n;
const result : number = multiply(2);

// 2.
const myStr = (arg: string | number | boolean) : string => arg.toString();

// 3.
function doSomething (num:number,operation: 'add' | 'subtract' | 'do nothing'): number {
    switch(operation){
        case 'add':
            return num+num;
        case 'subtract':
            return 12 - num;
        default:
            return 0;
    }
}

// 4.
function someFunction (){}
// const myNum: number = someFunction(); // type void cannot assign to number; 

// 5.
function callAnotherFunc(func:(price:number,course:string)=> string){
    return func(10,'ts');
}

let caller = callAnotherFunc((price,course) => `The ${course} has a price of ${price}`);
console.log(caller);

// 6.
type someFunc = (num:number)=> string;
const result1:someFunc = (num:number) => `TS function ${num}`;
console.log(result1(3));