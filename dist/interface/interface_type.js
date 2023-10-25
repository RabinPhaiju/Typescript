"use strict";
function getEmployeeInfo31(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        employeeHobbies() {
            return this.hobbies;
        },
    };
}
let employee31 = getEmployeeInfo31(12, 'rabin', ['ts', 'js']);
console.log(employee31);
console.log(employee31.employeeHobbies());
function getProductt1Info(id, name, category) {
    return { id, name, category };
}
let productt11 = getProductt1Info(1, 'ts', 'code');
const cat1 = { name: 'cat name' };
const dog1 = cat1;
console.log(dog1.name);
const productPrice1 = {
    name: 'ts',
    price: 2
};
console.log(productPrice1);
