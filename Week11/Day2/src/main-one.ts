// type StrOrNum = string | number | boolean
// type StrOrNumArray = (string|number)[]

// type Student = {
//     name:string,
//     age:number,
//     isGood:StrOrNumArray
// }

// type User = {
//     name:string,
//     isGood:StrOrNum
// }

// // [100,'good']

// // type literal

// type Name = 'John' | 'Mark'

// let username : Name = 'John'

// type Status = 'success' | 'loading'

// let userStatus:Status = 'loading'

// // function return

// const add = (a:number, b:number|string): number => {
//     //type guard
//     if(typeof(b)==='string'){
//         return - 1
//     }
//     return a+b
// }

// // console.log(add(4,'1'));

// // function overload

// function add1 (a:number, b:number): number

// function add1 (a:string, b:string): string

// function add1 (a:any, b:any): any {
//     return a+b
// }

// console.log(add1(2,3));
// console.log(add1('s','a'));
// // console.log(add1(2,'3'));


// // function not return value

// const logMessage = (name:string):void => {
//     console.log(`Hello ${name}`);
// }

// // type function

// type addFunc = (a:number,b:number)=>number

// const add2:addFunc =(a,b)=> {
//     return a+b
// }

// const addVAT : addFunc = (a,b) => {
//     return a+b *0.07
// }

// // optional parametr

// const addOptional = (a: number, b?:number):number=>{
//     return a+(b || 0)
// }

// const addOptional1 = (a: number, b:number=0):number=>{
//     return a+b
// }

// // rest parametr
// const addRest = (a:number,...rest:number[]):number =>{
//     return a+ rest.reduce((acc,val)=>acc+val,0)
// }

// console.log(addRest(2,3,4,5,6));

// // never type

// const throwError = (message:string):never =>{
//     throw new Error(message)
// }

// assertion or casting
// aliases type
// type One = string
// type Two = string|number
// type Three = 'hello'

// let a:One = 'hello'
// let b = a as Two
// b = 2
// let c = a as Three

// let d = <One>'world'
// let e = <string|number>'aaa'

// Dom Element
// const img = document.querySelector('img') as HTMLImageElement;

// img.src = 'https://www.google.com'

// const input = <HTMLInputElement>document.querySelector('input')

// const year = document.getElementById("year") as HTMLSpanElement
// const thisYear:string = new Date().getFullYear().toString()
// year.setAttribute("datetime",thisYear)
// year.textContent =thisYear

