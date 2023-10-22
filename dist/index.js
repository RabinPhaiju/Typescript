"use strict";
const user = {
    id: 1,
    name: 'Rabin'
};
const p1 = 1;
const user1 = {
    id: 1,
    name: 'Rabs'
};
let c_id = 1;
let customer_id = c_id;
let customer_id1 = c_id;
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
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name, emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray1 = getArray([1, 2, 3, 4]);
let numArray2 = getArray(['a', 'b', 'c', 'd']);
console.log(numArray1);
