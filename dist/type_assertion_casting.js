"use strict";
const employeee1 = {
    id: 1,
    name: 'Rabin',
    department: undefined
};
const hiredEmployee = JSON.stringify(employeee1);
console.log(typeof hiredEmployee);
function getEmployeeInfo(employeObject) {
    return JSON.parse(employeObject);
}
console.log(typeof getEmployeeInfo(hiredEmployee));
