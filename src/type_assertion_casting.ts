type Employeee = {
    id: number,
    name: string,
    department: string | undefined
}

const employeee1: Employeee = {
    id: 1,
    name: 'Rabin',
    department: undefined
}

const hiredEmployee = JSON.stringify(employeee1);
console.log(typeof hiredEmployee);


function getEmployeeInfo(employeObject:string){
    // return JSON.parse(employeObject); // any

    // Old Method
    // return (<Employeee>JSON.parse(employeObject));
    // return (<Employeee>JSON.parse(employeObject)).id;

    // New Method
    return JSON.parse(employeObject) as Employeee;
}

console.log(typeof getEmployeeInfo(hiredEmployee));