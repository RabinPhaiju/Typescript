interface PickProduct {
    name: string,
    price: number,
    rating: number
    sales: number
}

type PICKTYPE<Type,KeyType extends keyof Type> = { [Key in KeyType]:Type[Key] }
type PickTYPE<T,K extends keyof T> = {[P in K]:T[P]}

const pickProduct : PickTYPE<PickProduct,'name' | 'price'> = {
    name: 'sunglasses',
    price: 29
}

const pickProduct1 : Pick<PickProduct,'name' | 'price'> = {
    name: 'sunglasses',
    price: 29,
    // sales: 100
}

console.log(pickProduct)
console.log(pickProduct1)