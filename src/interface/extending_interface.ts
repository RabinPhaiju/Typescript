interface Department {
    department: Array<string>
}

interface Employee4 extends Department{
    readonly id: number,
    name:string,
    hobbies: Array<string>,
    employeeHobbies() : Array<string>
}

function getEmployeeInfo4(id:number,name:string,department:Array<string>,hobbies:Array<string>): Employee4 {
    // return {id,name,hobbies,} as Employee4;
    return {
        id,
        name,
        hobbies,
        department,
        employeeHobbies() {
            return this.hobbies;
        },
    } as Employee4;
}

let employee4: Employee4 = getEmployeeInfo4(12,'rabin',['Department'],['ts','js']);
console.log(employee4.id);
console.log(employee4.name);
console.log(employee4.hobbies);
console.log(employee4.department);