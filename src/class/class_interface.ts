interface RobotInterface{
    name:string,
    durability:string,
    weight:number,
    robotData():string
}

abstract class Robot6 implements RobotInterface {
    constructor(
        public name:string, // cannot call from child class.
        protected model:string, // can call from child class.
        public durability:string,
        public weight:number
        ) {}

        robotData():string {
            return `${this.name} ${this.model} ${this.durability} ${this.weight}`
        }
}

interface Avd6Interface {
    id:number,
    name:string,
    durability:string,
    weight:number,
    getModel():string,
    setModel(value:string):void
}

class Avd6 extends Robot6 implements Avd6Interface {
    constructor(
        public id:number,
        name:string,
        model:string,
        durability:string,
        weight:number,
    ){
        super(name,model,durability,weight);
    }

    robotData():string {
        return `${this.id} ${this.name} ${this.model} ${this.durability} ${this.weight}`
    }

     getModel():string {
        return this.model;
    }

    setModel(value:string) {
        this.model = value;
    }
}

let avdo6 = new Avd6(1,"Avdon","E##","high",10);
console.log(avdo6.robotData());
console.log(avdo6.getModel());
avdo6.setModel('E##');
console.log(avdo6.getModel());
