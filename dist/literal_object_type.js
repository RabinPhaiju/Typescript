"use strict";
function studentDB(student) {
    return student.fullname;
}
function studentDB1({ fullname }) {
    return fullname;
}
let student = { fullname: 'rabin' };
console.log(studentDB(student));
console.log(studentDB1(student));
function isOnline({ online }) {
    return online;
}
console.log(isOnline({ online: true }));
