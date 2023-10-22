type Product4 = {
    // name : 'ts', // 'ts' is not string its type.
    name : string,
    price: number
}

function courseName2(course:Product4){
    return course.name;
}

const course = {
    // name: 'ts' as const, // ts is value and also type.
    name: 'ts',
    price: 4
}

console.log(courseName2(course));