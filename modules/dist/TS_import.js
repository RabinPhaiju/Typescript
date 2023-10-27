import { getProductName, released } from "./TS_module";
import { course } from "./TS_re_export";
import { product, productList } from "./utils";
let product1 = getProductName({ productName: 'ts' });
console.log(product1);
console.log(course.name);
console.log(product);
console.log(productList);
if (released) {
    import("./TS_module").then(() => {
        console.log({ productName: 'ts' });
    });
}
