// Enum - Pascal Case
const enum DirectionPerson { // use this.
    Up, //=1, // if want to start from 1 # or assing a string to all elements eg: Up='Up' \n Down='Down'
    Down,
    Letf,
    Right
}

let directionUp: DirectionPerson = DirectionPerson.Up
let directionDown: DirectionPerson = DirectionPerson.Down
let directionLeft: DirectionPerson = DirectionPerson.Letf

console.log('printing direction up: ',directionUp)


// Note if you use const enum you can't change the value of the enum
enum CoinDirection {
    Up,
    Down,
}
console.log('printing direction up: ',CoinDirection.Up)

// String Enum Types
const enum StudentDetails{
    Name = 'Rabin',
    Age = 22,
    Gender = 'Male',
}

let studentName:StudentDetails = StudentDetails.Name
let studentAge:StudentDetails = StudentDetails.Age
let studentGender:StudentDetails = StudentDetails.Gender
console.log('printing student name: ',studentName)
console.log('printing student age: ',studentAge)
console.log('printing student gender: ',studentGender)

// Heterogeneous enums
const enum EmployeeDetails {
    ID = 1,
    Name = "John",
    Position = "Developer"
}

let employeeId:EmployeeDetails = EmployeeDetails.ID
let employeeName:EmployeeDetails = EmployeeDetails.Name
let employeePosition:EmployeeDetails = EmployeeDetails.Position
console.log('printing employee id: ',employeeId)
console.log('printing employee name: ',employeeName)
console.log('printing employee position: ',employeePosition)