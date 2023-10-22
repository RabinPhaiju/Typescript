let prodcutName:(product:string,price:number) => string;

prodcutName = (product,price) => {
    return `'${product}, ${price}`;
}

console.log(prodcutName('TS Optional',1));



// Optional parameter
let productName1: (product:string,price?:number) => string;

productName1 = (product,price=0) => {
    return `'${product}, ${price}`;
}

console.log(productName1('TS Optional'));