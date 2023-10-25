interface Product6<T> {
    price:T
}

const product6 : Product6<string> = {
    price: '10'
}

const product61 : Product6<number> = {
    price: 10
}

////
interface Product62<T1,T2,T3>{
    name:T1;
    price:T2;
    availability: T3;
}

const product621: Product62<string,number,boolean> ={
    name :'ts',
    price: 12,
    availability:true
}