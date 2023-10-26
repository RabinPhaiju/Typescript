class GenericProduct<T1,T2> {
    constructor(public name: T1, public price: T2) {}
    
}

const genericProduct = new GenericProduct<string,number>('abc',123);
console.log(genericProduct.name);