type Item = { productName : string};

function itemOrItems(items: Item | Array<Item>): number{
    if(Array.isArray(items)){
        return items.length;
    }else{
        return items.productName.length;
    }
}

console.log(itemOrItems({productName:'ts'}));
console.log(itemOrItems([{productName:'ts'},{productName:'js'}]));

// 1.
function productViews(arg: number | true) : Boolean { // true is type not bool.
    if((typeof arg === 'number' && arg > 0) || arg === true){
        return true; // true is bool
    }else{
        return false;
    }
}

function productViews1(arg: number | true) : Boolean {
    return arg === true 
        ? true 
        : (typeof arg === 'number' && arg > 0)
}

// 2.
function arrayOrItem<T>(elements: Array<T> | T): T{
    if(Array.isArray(elements)){
        return elements[0];
    }else{
        return elements;
    }
}