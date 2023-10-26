"use strict";
const person = {
    name: 'Rabin',
    objFunc() {
        console.log(this.name);
    }
};
person.objFunc();
function addition() {
}
addition.call({ name: 'Rabin' });
