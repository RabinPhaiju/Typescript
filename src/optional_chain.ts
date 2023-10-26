type Product14 = {
    name:string,
    info : ProductInfo14 | undefined
}

type ProductInfo14 = {
    level:string,
    noOfStudents: number |undefined
}

const courses14 : Array<Product14> = [
    {
        name:'ts',
        info:{
            level:'master',
            noOfStudents:3
        }
    },
    {
        name:'js',
        info:{
            level:'begin',
            noOfStudents:undefined
        }
    },
    {
        name:'css',
        info: undefined
    }
];

console.log(courses14);

courses14.map(course=>{
    console.log(course.info?.noOfStudents);
})

// without optional_chaining
const courseInfo14 = courses14.map(course=>{
    return course.info ? course.info.noOfStudents : undefined;
})
console.log(courseInfo14)