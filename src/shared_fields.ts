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

// 1.
type DepartmentTest1 = {
    departmentName: string,
}

type ProductTest1 = {
    productName: string,
}

type ProductTestInfo = DepartmentTest1 & ProductTest1;

function getProductTestInfo ({productName}: ProductTestInfo): string {
    return productName;
}

console.log(getProductTestInfo({productName: 'Javascript', departmentName: 'Programming'}))

// 2.
type TestUser1 = {
    online:true,
    status: string
}

type TestUser2 = {
    online:false
}

type TestUser3 = TestUser1 | TestUser2;

// valid
const testUserInfo1: TestUser3 = {online: true,status: 'active'};
const testUserInfo2: TestUser3 = {online: false};
// Invalid
// const testUserInfo3: TestUser3 = {online: false,status: 'active'};
// const testUserInfo4: TestUser3 = {online: true};

// 3.
type SucceedAPICall = {
    response: "success",
    value : number
}
type FailedAPICall = {
    response: "failed",
    reason : string
}
type APICall = SucceedAPICall | FailedAPICall

function APICallStatus (s:string): APICall {
    const n: number = Number(s);
    if(Number.isNaN(n)){
        return {response: "failed", reason: 'string cannot be converted to a number'};
    }else{
        return {response: "success", value: n};
    }
}
let apiCallResult = APICallStatus('123a');
console.log(apiCallResult)
// console.log(apiCallResult).value)
console.log(apiCallResult.response === 'success' ? apiCallResult.response : undefined)

// 4.
interface TestProduct1 {
    productName: string,
}

interface TestProduct1{
    category: string,
}

let testProduct11 : TestProduct1 = {
    productName: 'Javascript',
    category: 'Programming'
}
console.log(testProduct11)