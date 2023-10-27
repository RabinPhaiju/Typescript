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

