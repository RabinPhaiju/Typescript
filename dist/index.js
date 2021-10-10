"use strict";
// Basic Types
let id = 5;
let company = 'Rabs';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5]; // Array only contains numbers
let arr = [1, true, 'hello', null];
// Tuple
let person = [1, 'Rabin', true]; // type at that exact spot and order
// Tuple Array
let employee = [[1, 'Rbain'], [2, 'Nepal']];
// Union
let p_id = 22;
p_id = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Letf"] = 2] = "Letf";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('printing direction up: ', Direction1.Up);
// Object
const user = {
    id: 1,
    name: 'Rabin'
};
const p1 = 1;
const user1 = {
    id: 1,
    name: 'Rabs'
};
// Type assertion
let c_id = 1;
let customer_id = c_id;
// OR
let customer_id1 = c_id;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log('The sum is :', addNum(2, 4));
function log(message) {
    console.log('The message is :', message);
}
log('hello typescript');
const user2 = {
    id: 1,
    name: 'Rabin',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log('interface function add is : ', add(4, 5));
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const per1 = new Person(1, 'Rabin');
console.log(per1.register);
console.log('Person1 name is: ', per1.name);
per1.name = 'Rabs';
console.log('Person1 name is: ', per1.name);
// Extend class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name, emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray1 = getArray([1, 2, 3, 4]);
let numArray2 = getArray(['a', 'b', 'c', 'd']);
// numArray1.push('hello')
console.log(numArray1);
