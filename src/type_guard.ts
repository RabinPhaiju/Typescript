// 1. typeof
function getProductPrice(product:string | number): number {
    if(typeof product === 'string'){
        return parseInt(product);
    }else{
        return product; // can be other type (number);
    }
}

const coursePrice1 = getProductPrice('10');
const coursePrice2 = getProductPrice(10);

// 2.  ----  instanceof

let newDate = new Date();

if(newDate instanceof Date){
    console.log('true');
}else{console.log('false')}

// 3. specific value check
let someValue = null;
if(someValue == null){
    console.log('true');
}else{console.log('false')}

// 4. truthy and falsy check
let someValue1 = true;

if(!!someValue1){
    console.log('true')
}else{ console.log('false') }

// 5. built-in method
let someArr = [1,2,3];
if(Array.isArray(someArr)){
    console.log('true')
}else{ console.log('false') }

// 6. property presence check
let someObject = {name:'ts'};
if('price' in someObject){
    console.log('true')
}else{ console.log('false') }