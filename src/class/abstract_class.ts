abstract class Robot4{
    // cannot instanciate this class.
    // Robot3 class's object are not created. So we can use abstract classes.
    constructor(
        public name:string,
        public model:string,
        public durability:string,
        public weight:number
        ) {}
}

class Avdondon extends Robot4  {
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

let avdondon1 = new Avdondon(1,"Avdon","E##","high",10);
console.log(avdon1.robotData);

// let robot4 = new Robot4("Avdon","E##","high",10); // cannot create instance of abstract class