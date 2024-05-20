"use strict";
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
let num = 12;
let str = 'abc';
let bool = true;
let anyVar = 12;
anyVar = 'abc';
anyVar = true;
// functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 6));
// union
let union = 12;
let union2 = 'abc';
union2 = true;
// RegExp
let re = /\w+/g;
// Array
let strarr = ['a', 'b', 'c'];
strarr[1] = '1';
let numstr = ['a', 1, 'b', 2];
// Tuple
let tuple = ['a', 1, true];
// object
let myObj = {};
myObj = [];
const myObj2 = {
    name: 'John',
    age: 25
};
// myObj2.name=5
myObj2.name = 'Andrew';
let user = {
    name: 'John',
    age: 25
};
const printUser = (user) => {
    console.log(user);
};
printUser({ name: 'John', age: 25 });
// enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
