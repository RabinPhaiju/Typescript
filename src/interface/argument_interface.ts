// two interface can have same name
// interfaces merge.
// which ever interface comes first is main. and other merge to it.
interface Product5 {
    name:string,
    price:number
}

interface Product5{
    // price: number, // must be same type
    rating:number,
    sales:number
}

const product5 : Product5 = {
    name:'TS',
    price: 12,
    rating: 2,
    sales: 4
}

interface Product5 {
    name:string,
}

