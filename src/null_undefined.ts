let discount:number

function specialDiscount(holidaySeason:boolean):number{
    if(holidaySeason){
        discount = 0.4;
    }else{
        discount = 0.2;
    }
    return discount;
}

let holidayDiscount = specialDiscount(true);
// let holidayDiscount1 = specialDiscount(null); // Argument of type 'null' is not assignable to parameter of type 'boolean'
console.log(holidayDiscount);

// nullability
let notSure1 : undefined = undefined;
let notSure2 : null = null;

// concept of union

let notSure3 : null | number = 123;
let notSure4 : null | number = null;

// 1.
// let vague : number | undefined = null; // TE
let vague : number | undefined = undefined;
let vague1: Boolean | undefined = true ? true : undefined;
// let vague2: Boolean = vague1; // TE

// 2.
function nullNarrow(arg : string | undefined) : number | undefined {
    if(arg === undefined || isNaN(parseInt(arg.toString())) ){
        return undefined;
    }else{
        return parseInt(arg);
    }
}
