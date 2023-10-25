type Cover<T>  = {
    front : T,
    back : T,
    page : number
}

const bookCover: Cover<string> = {
    front: 'front',
    back: 'back',
    page:10
}

// ---------
type Productt<T1,T2> = {
    name : T1,
    price : T2
}

const productt1 : Productt<string,number> = {
    name: 'Ts',
    price: 30
}

const productt2 : Productt<string,string> = {
    name: 'Ts',
    price: 'Not available'
}