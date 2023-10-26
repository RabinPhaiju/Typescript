type Name = string;
type Price = number;

type ConditionalProduct<T> = T extends 'ProductProduct' ? Name : Price;

let testProductName: ConditionalProduct<"ProductProduct">
let testProductPrice: ConditionalProduct<"ProductPrice">

// 
type Vague1 = 'Hi' extends string ? true : false;
type Vague2 = 'Hi' extends any ? true : false;
type Vague3 = 'Hi' extends number ? true : false;

type Vague4 = string extends 'Hi' ? true : false;

type Vague5 = 13 extends number ? true : false;
type Vague6 = number extends 13 ? true : false;
type Vague7 = number extends string ? true : false;
type Vague8 = number extends any ? true : false;
type Vague9 = string extends number ? true : false;

type Vague10 = true extends boolean ? true : false;
type Vague11 = true extends string ? true : false;
type Vague12 = false extends any ? true : false;
type Vague13 = string extends any ? true : false;
type Vague14 = 13 extends any ? true : false;

//
type Vague15 = unknown extends any ? true : false;
type Vague16 = never extends any ? true : false;
type Vague17 = any extends any ? true : false;
type Vague18 = void extends any ? true : false;

type Vague19 = undefined extends void ? true : false;
type Vague20 = undefined extends never ? true : false;
type Vague21 = undefined extends unknown ? true : false;

type Vague22= null extends any ? true : false;
type Vague23 = null extends never ? true : false;
type Vague24 = never extends never ? true : false;