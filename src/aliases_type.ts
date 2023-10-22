let courseDiscounts: number = 24;
courseDiscounts = 30;

// using type alias

type CourseDiscounts = number;
let courseDiscounts1: CourseDiscounts = 24;
courseDiscounts1 = 30


// ----------------------------------------------
// type alias can't have value, they are types.

let courseDiscounts2: 25 | 30 | 45 | 60 = 25; 

type CourseDiscounts3 = 25 | 30 | 45 | 60;
let courseDiscounts3: CourseDiscounts3 = 25;


// -------------- leteral type ---------------

type TSCourse = 'TS';
// let tscourse: TSCourse = 'TSs';

type MyCourses = {
    name: string;
    price: number | null;
}

const tsCourse: MyCourses = {
    name: 'TS',
    price: 100,
}

const jsCourse: MyCourses = {
    name: 'JS',
    price: null,
}

// 1.
type Score = number;
let avgScore : number = 12.4;
let score:Score = avgScore;