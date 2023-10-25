const product:{
    name:string,
    price:number,
    level:string
} = {name:"TS",price:12,level:'Beginner'}; // cannot re use this object type.

// Object Type ----------------
type Product = {
    name : string,
    price : number,
    readonly level : string,
    released? : boolean
};

const product1 : Product = {
    name: "TS",
    price: 12,
    level: "Beginner"
};

// product1.level = '14'; // readonly
product1.released = true;


// 1.
type OnlineCourse = {
    name : string,
    platform : string,
    features : string[]
    'meta-data' : {
        published : Boolean
    }
};

const myCourse: OnlineCourse = {
    name : 'TS Course',
    platform: ' Udemy',
    features: ['practical'],
    "meta-data": {
        published : true
    }
};

console.log(myCourse["meta-data"].published);

// 2.
type Product2 = {
    name : string,
    publishedStatus? : Boolean
    release?:Boolean
};

const product2: Product2 = {name:'Ts'}
const product21: Product2 = {name:'Ts',publishedStatus:true}


// 3.
const onlineCourse:Product2 = {name: 'Ts',publishedStatus:false};
const courseProduct:Product2 = {...onlineCourse,release:true}

// 4.
type Product3 = {
    displayName:string,
    holidaySales : () => string
}

const product3:Product3 = {
    displayName:'sales',
    holidaySales:()=> `sales on holiday`
}

console.log(product3.holidaySales());
