abstract class Robot5{
    constructor(
        public name:string, // cannot call from child class.
        protected model:string, // can call from child class.
        public durability:string,
        public weight:number
        ) {}
}

class Avdo extends Robot5  {
    constructor(
        public id:number,
        name:string,
        model:string,
        durability:string,
        weight:number,
    ){
        super(name,model,durability,weight);
    }

    get robotData():string {
        return `${this.id} ${this.name} ${this.model} ${this.durability} ${this.weight}`
    }

    public get getModel():string {
        return this.model;
    }

    public set setModel(value:string) {
        this.model = value;
    }
}

let avdo = new Avdo(1,"Avdon","E##","high",10);
console.log(avdo.robotData);
console.log(avdo.getModel);
avdo.setModel = 'E';
console.log(avdo.getModel);
