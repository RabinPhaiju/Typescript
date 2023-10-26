const person = {
    name: 'Rabin',
    objFunc(): void {
        console.log(this.name);
    }
}
person.objFunc();

// 
function addition():void {
    // return undefined if node.
    // return window if broswer.
    // when binds using call methiod. it refers to that object.
    // console.log(this); 
}
// addition();
// addition.call({name:'Rabin'});

// 1.
function addition1(a:number,b:number):void {
    // return undefined if node.
    // return window if broswer.
    // when binds using call methiod. it refers to that object.
    // console.log(this, a+b); 
}
// addition1.call({name:'Rabin'},10,30);
// addition1.apply({name:'Rabin'},[10,30]);

let operation1 = addition1.bind({name:'Rabin'},20,40);
operation1();