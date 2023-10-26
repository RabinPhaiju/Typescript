// Mapped types
type Product15 = {
    name:string,
    price:number
}

// another way
type Product151 = Partial<{name:string,price:number}>

let course15: Partial<Product15> = {
    name:'test',
    price:undefined
}

course15.price = 23

console.log(course15)

// cannot assing string | undefined to string.
// let courseName15 : string = course15.name;
let courseName15 : string = course15.name!;

console.log(courseName15)