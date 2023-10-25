function printHello(){
    console.log('Hello Typescript');
}

printHello();

let productCategory: string;
let shoppingCart = (category:string):void =>{
productCategory = category;
}

console.log(shoppingCart('Electronics')); // returns undefined

// void returns undefined
let movieName: void = undefined; // no error
