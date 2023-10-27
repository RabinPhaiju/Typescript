type RecordCourse = {
    name: string,
    price: number
}


// record map types
// restricted to string.
type RecordTYPE<KeyType extends string,ValueType> = { [key in KeyType]: ValueType }
// identical except for any with string.
type Record1<K extends keyof any, T> = { [P in K]: T };
//
let recordKeyType:keyof any // string | number | symbol

function getRecordProductInfo<T extends string ,U>(course: RecordTYPE<T,U>){
    return course;
}

let recordCourses = getRecordProductInfo({
    TS:{name:'Typescript',price:100},
    JS:{name:'Javascript',price:100,other:3},
    Python :{name:'Python',price:100}
});

console.log(recordCourses);