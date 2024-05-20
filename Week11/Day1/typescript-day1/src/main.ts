
// let username = 'John'
// let age = 25

// username = 'Dan'
// username = 25

// age = '25'

// let a = 12
// let b = '12'
// let c = 2

// console.log(a+b);
// console.log(a/b);
// console.log(a*b);

// let a : number = 12
// let b : string

// b='abc'
// a=123

// let yesno : boolean = true
// yesno = false

// let num = 12
let num : number = 12

let str : string = 'abc'

let bool : boolean = true

let anyVar : any = 12
anyVar = 'abc'
anyVar = true

// functions

const sum = (a: number,b: number): number => {
    return a+b
}
console.log(sum(2,6));

// union

let union:number | string = 12
let union2: number | string | boolean = 'abc'
union2=true

// RegExp

let re: RegExp = /\w+/g

// Array

let strarr:string[] = ['a','b','c']
strarr[1] = '1'

let numstr: (string | number)[] = ['a',1,'b',2]

// Tuple

let tuple: [string,number,boolean] = ['a',1,true]

// object
let myObj: object = {}
myObj = []

const myObj2 = {
    name: 'John',
    age: 25
}

// myObj2.name=5
myObj2.name='Andrew'

// type & interface 

type User ={
    name:string,
    age:number
}

interface MyUser {
    name:string,
    age:number,
    address?:string,
}

let user:User={
    name:'John',
    age:25
}

const printUser = (user: User) => {
    console.log(user);
}

printUser({name: 'John', age: 25})

// enum

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.D);

let literal: 1 | 'load' | 'pidr'

literal = 1
