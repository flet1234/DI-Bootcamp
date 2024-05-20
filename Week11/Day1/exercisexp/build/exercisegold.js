"use strict";
// Exercise 1: Union Types
// What You Will Learn:
// How to use union types in TypeScript.
// How to handle different input types using type checking.
// How to format different types of inputs into strings.
// Description: Create a function that uses union types to handle different input types.
// Instructions
// Create a function formatValue that accepts a parameter which can be either a string or a number. The function should return the input value formatted as a string, with different formatting based on the type of the input.
// -->
// const formatValue = (param:number|string):string => {
//     if(typeof(param)==='number'){
//         return param.toString()
//     } else {
//         return param
//     }
// }
// console.log(formatValue(2));
// ---------------------------------------------------------------------------------------------------
// Exercise 2: Array Type Annotations
// What You Will Learn:
// How to use array type annotations in TypeScript.
// How to perform operations on arrays of a specific type.
// Description: Use array type annotations to create a function that works with an array of a specific type.
// Instructions
// Create a function sumNumbers that takes an array of numbers as an argument and returns the sum of all numbers in the array.
// -->
// const sumNumbers = (array:number[]):number=>{
//     return array.reduce((accum, item)=> {
//         return accum + item
//     },0)
// }
// console.log(sumNumbers([1,2,3,4]));
// --------------------------------------------------------------------------
// Exercise 3: Type Aliases
// What You Will Learn:
// How to create type aliases for custom types.
// How to improve code readability and maintainability with type aliases.
// Description: Use type aliases to define custom types and make code more readable.
// Instructions
// Create a type alias User that represents an object with name and age properties. Then, create a function introduceUser that takes a User object as an argument and returns a greeting message.
// -->
// type User = {
//     name:string,
//     age:number
// }
// const introduceUser = (user:User):string => {
//     return `Hallo ${user.name} your age is ${user.age}`
// }
// console.log(introduceUser({name:'Andrew', age: 24}));
// -----------------------------------------------------------------------------------------
// Exercise 4: Optional Parameters
// What You Will Learn:
// How to use optional parameters in TypeScript functions.
// How to use conditional logic to handle different cases based on parameter presence.
// Description: Create a function with an optional parameter and use conditional logic to handle different cases.
// Instructions
// Create a function greetUser that takes a name as a required parameter and a greeting as an optional parameter. The function should return a greeting message, using the provided greeting if available or a default greeting otherwise.
// -->
// const greetUser = (name:string,greet?:string):string => {
//     if(greet){
//         return `${greet} ${name}`
//     } else {
//         return `Hi ${name}`
//     }
// }
// console.log(greetUser('john','Hallo super'));
// --------------------------------------------------------------------------------------------------------
// Exercise 5: Function Overloading
// What You Will Learn:
// How to create overloaded functions in TypeScript.
// How to handle different types of arguments and return different types of results.
// Description: Create an overloaded function that can accept different types of arguments and return different types of results.
// Instructions
// Create an overloaded function calculate that can either take two numbers and return their sum or take two strings and return their concatenation.
// -->
const calculate = (param1, param2) => {
    if (typeof (param1) === 'number' && typeof (param2) === 'number') {
        return param1 + param2;
    }
    else if (typeof (param1) === 'string' && typeof (param2) === 'string') {
        return param1 + param2;
    }
    else {
        throw new Error('Use numbers or strings, they must be the same type Yo');
    }
};
console.log(calculate('1', '2'));
