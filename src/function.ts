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
    dept:string
    ):number=>{
        let department: string = 'Tech';
    let price:number = 0;
    if(product == 'sunglasses') price = 29;
    else if(product == 'eyeglasses') price = 99;
    else if(product == 'perfume') price = 59;
    return parseFloat((price * sales * (1 + tax) * (1 - discount)).toFixed(2));
}

const sunglasses1:number = holidaySales1('sunglasses', 100, 0.1, 0.2,'mini market');
console.log('glasses price is :',sunglasses1);