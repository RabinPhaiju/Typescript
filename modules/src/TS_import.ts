import {getProductName,released} from "./TS_module";
import {course} from "./TS_re_export";

import { product,productList } from "./utils";
// tsconfig.json -> moduleResolution:node

let product1 = getProductName({productName: 'ts'});
console.log(product1);
console.log(course.name);

console.log(product);
console.log(productList);

// conditionally loading
if(released){
    import("./TS_module").then(()=>{
        console.log({productName: 'ts'});
    })
}


// import json
// import *  as config from "./utils/config.json"
// console.log(config.username)


// work with js
// import { addition } from "ambient";
// console.log(addition(1,2));

