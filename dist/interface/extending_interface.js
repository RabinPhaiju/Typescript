"use strict";
function getEmployeeInfo4(id, name, department, hobbies) {
    return {
        id,
        name,
        hobbies,
        department,
        employeeHobbies() {
            return this.hobbies;
        },
    };
}
let employee4 = getEmployeeInfo4(12, 'rabin', ['Department'], ['ts', 'js']);
console.log(employee4.id);
console.log(employee4.name);
console.log(employee4.hobbies);
console.log(employee4.department);
