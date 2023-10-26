"use strict";
const courses14 = [
    {
        name: 'ts',
        info: {
            level: 'master',
            noOfStudents: 3
        }
    },
    {
        name: 'js',
        info: {
            level: 'begin',
            noOfStudents: undefined
        }
    },
    {
        name: 'css',
        info: undefined
    }
];
console.log(courses14);
courses14.map(course => {
    var _a;
    console.log((_a = course.info) === null || _a === void 0 ? void 0 : _a.noOfStudents);
});
const courseInfo14 = courses14.map(course => {
    return course.info ? course.info.noOfStudents : undefined;
});
console.log(courseInfo14);
