"use strict";
let magazine = {
    name: 'TS',
    author: 'Admin',
    sales: 11,
    international: true,
    price: 6,
    publicationYear: 1994
};
console.log(magazine.author);
console.log(magazine.name);
let magazineName = magazine;
console.log(magazineName);
console.log(magazineName.name);
