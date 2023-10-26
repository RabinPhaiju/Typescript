const courseType = {
    name: 'TS',
    price: 100
}

// type query
type ProductType = typeof courseType;

// use in utility.
type ProductKey = keyof ProductType;

let productKey1: ProductKey = 'name';

console.log(typeof productKey1)

type ProductKeyTypes  = ProductType[ProductKey]
// type of courseType are -> string | number.

function getCourseName<T,K extends keyof T>(course: T, info: K){
    return course[info];
}

console.log(getCourseName({name: 'TSSS',price: 10}, 'name'));