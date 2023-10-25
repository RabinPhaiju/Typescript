type Employee3 = {
    readonly id: number,
    name:string,
    hobbies: Array<string>
}

interface Employee31 extends Department{
    readonly id: number,
    name:string,
    hobbies: Array<string>,
    employeeHobbies() : Array<string>
}


// Diff
// type - type for anything. (string,number,'ts' anything.)
// interface only provide type for an object.(object literal or instance of class)
// Interface is soley created for object. Do more with interface, More functionality


// ------------ Interface Methods ----------------------
function getEmployeeInfo31(id:number,name:string,hobbies:Array<string>): Employee31 {
    // return {id,name,hobbies,} as Employee31;
    return {
        id,
        name,
        hobbies,
        employeeHobbies() {
            return this.hobbies;
        },
    } as Employee31;
}

let employee31: Employee31 = getEmployeeInfo31(12,'rabin',['ts','js']);
console.log(employee31);
console.log(employee31.employeeHobbies());


// 1.
interface Productt1 {
    readonly id: number,
    name:string,
    category:string
}

function getProductt1Info(id:number,name:string,category:string): Productt1 {
    return {id,name,category}
}

let productt11 : Productt1 = getProductt1Info(1,'ts','code')

// 2.
type Cat1 = {
    name:string,
}

interface Dog1 {
    name:string
}

const cat1 : Cat1 = {name:'cat name'}
const dog1 : Dog1 = cat1
console.log(dog1.name)

// 3. 
interface ProductNames {
    name: string
}

interface ProductPrice extends ProductNames {
    price:number
}

const productPrice1 : ProductPrice = {
    name : 'ts',
    price: 2
}

console.log(productPrice1)