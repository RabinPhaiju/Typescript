// leterally just that type.

// --------- Anything could be a type --------------------

let myFabNumber: 45 = 45; // 45 is a literal type
let myFabString: 'thisIsString' = 'thisIsString'; // 'thisIsString' is a literal type


type CourseDiscounts4 = 25 | 30 | 45;
let courseDiscount4:  CourseDiscounts4 = 45; // 45 is a literal type

// ----------------------
let newTip = (bill: number, tipPercent: 25 | 30 | 45): number => {
        return bill * tipPercent;
}
console.log(newTip(100, 25));

// ----------------------
type FrontEndWebDev = 'HTML'; 

// 1. 
const courseName1 =() : 'TS' => 'TS';
let typeScript: 'TS' = courseName1();

// 2.
type BookType = 'And the Mountains Echo' | 'THe kita is Runner' | 'A thousand suns';
let favBook : BookType = 'A thousand suns';

// 3.
// let myBool : true = false;
let myBool1 : false = false; // :false is not a boolean its a type.
