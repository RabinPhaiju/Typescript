type MagazineInfo = {
    name:string,
    author:string,
    sales:number,
    international:Boolean,
    price:number,
    publicationYear:number
}

let magazine : MagazineInfo = {
    name:'TS',
    author:'Admin',
    sales:11,
    international:true,
    price:6,
    publicationYear:1994
}

console.log(magazine.author);
console.log(magazine.name);


type MagazineName = {
    name : string,
}

let magazineName: MagazineName = magazine;
console.log(magazineName); // have all keys of MagazineInfo.

// only name is available - called object narrowing.

// As long as structure matches we can access it.
console.log(magazineName.name);

