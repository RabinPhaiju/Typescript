type MappedCourse = {
    name: string,
    price: number
}

type MappedProduct<T> = { [k : string]: T }

function getMappedCourseInfo<T>(course: MappedProduct<T>){
    return course;
}

let mappedCourses = getMappedCourseInfo<MappedCourse>({
    course_1:{name: 'Typescript',price: 100},
    course_2:{name: 'Javascript',price: 100},
    course_3:{name: 'Python',price: 100},
    course_4:{name: 'Java',price: 100},
})
console.log(mappedCourses.course_1);

// only allowed -- mapped type
type MappedProduct1 = { [course in 'TS' | 'JS']: MappedCourse };

function getMappedCourseInfo1(course: MappedProduct1){
    return course;
}

let mappedCourses1 = getMappedCourseInfo1({
    TS:{name: 'Typescript',price: 100},
    JS:{name: 'Javascript',price: 100},
})
console.log(mappedCourses1);


//  equavalent to type MappedProduct<T> = { [k : string]: T }
type MappedProduct2 = { [course in string]: MappedCourse };
