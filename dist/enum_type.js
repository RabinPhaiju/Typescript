"use strict";
let directionUp = 0;
let directionDown = 1;
let directionLeft = 2;
console.log('printing direction up: ', directionUp);
var CoinDirection;
(function (CoinDirection) {
    CoinDirection[CoinDirection["Up"] = 0] = "Up";
    CoinDirection[CoinDirection["Down"] = 1] = "Down";
})(CoinDirection || (CoinDirection = {}));
console.log('printing direction up: ', CoinDirection.Up);
let studentName = "Rabin";
let studentAge = 22;
let studentGender = "Male";
console.log('printing student name: ', studentName);
console.log('printing student age: ', studentAge);
console.log('printing student gender: ', studentGender);
let employeeId = 1;
let employeeName = "John";
let employeePosition = "Developer";
console.log('printing employee id: ', employeeId);
console.log('printing employee name: ', employeeName);
console.log('printing employee position: ', employeePosition);
