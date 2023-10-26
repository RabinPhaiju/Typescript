class MyTsProduct {
    // lexical scope
    onlineCourse1(){
        const productName: string = 'Javascript';
        let self = this;
        setTimeout(function(){
            // console.log(this); // this refers to window
            // hack
            console.log(self);
        },1000);
    }
    onlineCourse2(){
        const productName: string = 'Javascript';
        setTimeout(() => {
            // it refers to current function scope.
            // arrow function dont know binding.
            console.log(this);
        },1000);
    }
}

let myTsProduct1 = new MyTsProduct();
myTsProduct1.onlineCourse1();
myTsProduct1.onlineCourse2();