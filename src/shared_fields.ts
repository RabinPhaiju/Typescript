type Product7 = {
    name:string,
    price:number,
    sales:number,
    category:string
}

type Course7 = {
    name:string,
    price:number,
    sales: number,
    rating:number
}

type OnlineCourse7 = Product7 | Course7; // merge the types.

const course7 : OnlineCourse7 = {
    name:'ts',
    price:12,
    sales:200,
    category:'code',
    rating: 3.6
}

// ---------- make it shorter ----------
type DigitalProduct7 = {
    name:string,
    price:number,
    sales: number,
}

type Product71 = DigitalProduct7 & {
    category:string
}

type Course71 = DigitalProduct7 & {
    rating:number
}
type OnlineCourse71 = Product71 | Course71;


const course71 : OnlineCourse71 = {
    name:'ts',
    price:12,
    sales:200,
    category:'code',
    rating: 3.6
}

// ------------ more readable -----------
type DigitalProduct72 = {
    name:string,
    price:number,
    sales: number,
} & ({ category:string} | { rating:number})

type OnlineCourse72 = DigitalProduct72


const course72 : OnlineCourse72= {
    name:'ts',
    price:12,
    sales:200,
    category:'code',
    rating: 3.6
}

console.log(course72)