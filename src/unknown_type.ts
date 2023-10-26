let someStr : unknown = "hey"
let discount1 : unknown = 25;

// let otherNum : number = discount1 // cannot assign unknown to number/

// ---------------
let discount2 : unknown = 25
let otherNUm2  = typeof discount2 === "number" ? discount2 : 10;
console.log(otherNUm2)

// any type------------------
let courseName3: any = 'ts'
console.log(typeof courseName3)
let coursePrice3: number = courseName3
console.log(coursePrice3)


// ------- 
let courseName4 : any = 'ts'
let coursePrice4: unknown = courseName4


// ------- unknown -> any -> number --- NOT RECOMMENDED -------
let courseName5 : unknown = 'ts'
let coursePrice5: any = courseName5

let price5: number = coursePrice5
console.log(price5) // ts

// RECOMMENDED
let courseName6 : any = 'ts'
let coursePrice6: unknown = courseName6

let price6: number = typeof coursePrice6 === 'number' ? coursePrice6 : 10
console.log(price6) // ts

// unknown absorbs the union
let courseName7 : unknown | string = 'ts'
// let courseProduct7 : string = courseName7 // cannot assing uknown type yo string type.

// unknown absorbs the intersection
// let courseName8 : unknown & string = 25