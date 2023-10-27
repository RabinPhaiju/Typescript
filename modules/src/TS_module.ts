function getProductName({productName}: {productName: string}):string {
    return productName;
}

const course = {
    name: 'ts',
    price:100
};

let released = false;
const courseName = "TS course"

export {
    getProductName,
    course,
    released,
    courseName
};