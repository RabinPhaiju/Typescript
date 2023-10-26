"use strict";
class Robot {
    constructor(id, model, name) {
        this.id = id,
            this.model = model,
            this.name = name;
    }
    walk() {
        return `${this.name} is walking`;
    }
}
let robot1 = new Robot(1, "EX60", "Rabit");
console.log(robot1);
console.log(robot1.walk());
console.log(robot1 instanceof Robot);
