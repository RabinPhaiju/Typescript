type Product8 = {
    name:string
}

let course8 : Product8 = {
    name:'ts',
    // price:12
}


// ----------------------
// type could be anything, that is string
type Product9 = {
    [k:string]: string, // k is place holder.
}

let course9 : Product9 = {
    ts: 'test',
    10: '10'
}
console.log(course9)

// ------- all types must be same ----------

type Product10 = {
    [course:string]: string; // k is place holder.
    released: string
}

let course10 : Product10 = {
    ts: 'test',
    10: '10',
    released: 'true'
}
console.log(course10)

// index dict
type Product11 = {
    [k:string]: {
        name:string,
        price:number
    }
}

let course11 : Product11 = {
    ts: {name:'ts',price:12},
    js: {name:'js',price:12}
}

// 1. 
type Product16 = {
    [name:string] : number | undefined
}

const product16 : Product16 = {
    ts: 12,
    js: 12
}