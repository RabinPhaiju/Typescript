"use strict";
const product = { name: "TS", price: 12, level: 'Beginner' };
const product1 = {
    name: "TS",
    price: 12,
    level: "Beginner"
};
product1.released = true;
const myCourse = {
    name: 'TS Course',
    platform: ' Udemy',
    features: ['practical'],
    "meta-data": {
        published: true
    }
};
console.log(myCourse["meta-data"].published);
const product2 = { name: 'Ts' };
const product21 = { name: 'Ts', publishedStatus: true };
const onlineCourse = { name: 'Ts', publishedStatus: false };
const courseProduct = Object.assign(Object.assign({}, onlineCourse), { release: true });
const product3 = {
    displayName: 'sales',
    holidaySales: () => `sales on holiday`
};
console.log(product3.holidaySales());
