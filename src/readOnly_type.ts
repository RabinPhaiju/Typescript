type Product17 = {
    name:string,
    price:number
}

// another way
type Product18 = Readonly<{name:string,price:number}>

// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

const course17 : Readonly<Product17> = {
    name:'ts',
    price:12
}

console.log(course17.name);

// course17.name = 'js' // readonly.

