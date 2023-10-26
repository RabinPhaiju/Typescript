class Robot3{
    constructor(
        public name:string,
        public model:string,
        public durability:string,
        public weight:number
        ) {}

        get robotData():string {
            return `${this.name} ${this.model} ${this.durability} ${this.weight}`
        }
}

class Avdon extends Robot3  {
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
}

let avdon1 = new Avdon(1,"Avdon","E##","high",10);
console.log(avdon1.robotData);

let robot3 = new Robot3("Avdon","E##","high",10);