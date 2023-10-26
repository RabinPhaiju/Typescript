// index type
type Product12 = {
    name:string,
    price:number,
    moreInfo : {
        released : boolean,
        begin : boolean,
        level:string
    }
    
}

function promoteProduct12(
    name:string,
    price:number,
    moreInfo: Product12['moreInfo']
): Product12 {
    return {
        name,
        price,
        moreInfo
    }
}

let promoteProduct1 = promoteProduct12('ts',12,{released:true,begin:true,level:'begin'})
console.log(promoteProduct1)

// index interface
interface Product13 {
    name:string,
    price:number,
    moreInfo : {
        released : boolean,
        begin : boolean,
        level:string
    }
    
}

let courseName13: Product13['name'] = 'ts';
let coursePrice13: Product13['price'] = 12;
