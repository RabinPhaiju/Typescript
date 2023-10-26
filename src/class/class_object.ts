class Robot {
    readonly id:number
    public model:string
    name:string
    durability?:number
    private _sentient:boolean

    constructor(id:number,model:string,name:string, sentient?:boolean){
        this.id = id,
        this.model = model,
        this.name = name,
        this._sentient = sentient ?? false
    }

    walk(): string{
        // this refers to this_class.
        return `${this.name} ${this.id} is walking`;
    }


    public get sentient() {
        return this._sentient;
    }

    public set sentient(value: boolean) {
        this._sentient = value;
    }
}

let robot1 = new Robot(1,"EX60","Rabit")
// robot1.id = 0; // readonly.
console.log(robot1);
console.log(robot1.walk());
console.log(robot1 instanceof Robot);

robot1.durability = 100;
console.log(robot1.durability);

robot1.sentient = true;
console.log(robot1.sentient);


// 1. 
class RobotStudent {
    name:string;
    noOfStudents:number;

    constructor(name:string,noOfStudents:number){
        this.name = name,
        this.noOfStudents = noOfStudents
    }

    get bestSeller(): string{
        return this.noOfStudents >= 3000 ? 'Best seller' : 'not so much'
    }
}

let robotStudent1 = new RobotStudent('John',1000);
console.log(robotStudent1.bestSeller);


let robotStudent2 = new RobotStudent('John',4000);
console.log(robotStudent2.bestSeller);