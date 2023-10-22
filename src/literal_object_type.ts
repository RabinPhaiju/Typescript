type Student ={
    fullname:string,
}

function studentDB(student:Student): string {
    return student.fullname;
}

// destructure object.
function studentDB1({fullname}:Student): string {
    return fullname;
}

let student:Student = {fullname:'rabin'};
console.log(studentDB(student));
console.log(studentDB1(student));


// 1.
function isOnline({online}:{online:Boolean}) : Boolean {
    return online;
}
console.log(isOnline({online:true}));