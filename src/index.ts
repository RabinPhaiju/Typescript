// Basic Types
let id: number = 5
let company:string = 'Rabs'
let isPublished:boolean = true
let x: any = 'Hello'

let  ids: number[] = [1,2,3,4,5] // Array only contains numbers
let arr:any[] = [1,true,'hello',null]

// Tuple
let person: [number,string,boolean] = [1,'Rabin',true] // type at that exact spot and order

// Tuple Array
let employee: [number,string][] = [[1,'Rbain'],[2,'Nepal']]

// Union
let p_id: string | number = 22
p_id = '22'

// Enum
enum Direction1 {
    Up,// =1 // if want to start from 1 # or assing a string to all elements eg: Up='Up' \n Down='Down'
    Down,
    Letf,
    Right
}
console.log('printing direction up: ',Direction1.Up)

// Object
const user:{
    id:number,
    name:string
}={
    id:1,
    name:'Rabin'
}
// Or | Object
type User = {
    id:number,
    name:string
}

type Point = number | string
const p1: Point = 1

const user1:User={
    id:1,
    name:'Rabs'
}

// Type assertion
let c_id: any = 1
let customer_id = <number>c_id
// OR
let customer_id1 = c_id as number

// Functions
function addNum(x:number,y:number):number{
    return x+y
}
console.log('The sum is :',addNum(2,4))

function log(message:string | number):void{
    console.log('The message is :',message)
}
log('hello typescript')

// Interfaces
interface UserInterface {
    readonly id:number,
    name:String
    age?: number // not compulsory to have a value
}

const user2 :UserInterface = {
    id:1,
    name:'Rabin',
}

// user2.id = 5 // Cannot assign to 'id' because it is a read-only property.

// Interfaces with function
interface Mathfunc {(x: number,y:number): number}

const add: Mathfunc = (x:number, y: number): number => x + y
const sub: Mathfunc = (x:number, y: number): number => x - y

console.log('interface function add is : ',add(4,5))

// Classes -> from es6

interface PersonInterface {
    id:number,
    name:String
    register(): string
}

class Person implements PersonInterface{
    // private id:number // can be access from 
    // protected id:number // can be access from this class or extending class
    id:number
    name:string

    constructor(id:number,name:string){
    this.id = id,
    this.name= name
    }
    register(){
        return `${this.name} is now registered`
    }
}

const per1 = new Person(1,'Rabin')
console.log(per1.register)
console.log('Person1 name is: ',per1.name)
per1.name = 'Rabs'
console.log('Person1 name is: ',per1.name)

// Extend class
class Employee extends Person{
    position: string

    constructor(id:number, name:string,position:string){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(3,'Shawn','Developer')
console.log(emp.name,emp.register())

// Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray1 = getArray<number>([1,2,3,4])
let numArray2 = getArray<String>(['a','b','c','d'])
// numArray1.push('hello')
console.log(numArray1)