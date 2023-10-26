// Global Scope
// var , const
let myName = '--name--';

function someName(){
    console.log(myName);
}
someName()

// Local Scope
function myFunction1(){
    const num:number = 10;
    var num1:number = 20;
    console.log(num);
}
myFunction1();
// console.log(num); // num is not defined in this scope

// block scope
{
    var num11:number = 30;
    var num11:number = 40; // can redeclare var
    let num12:number = 50;
    const num13:number = 60;

    console.log(num11);
    console.log(num12);
    console.log(num13);

}
console.log(num11); // have access outside block scope.
