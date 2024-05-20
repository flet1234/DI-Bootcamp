// 🌟 Exercise 1: Hello, World! Program
// What You Will Learn:

// How to create a simple TypeScript program.
// How to define and log variables of different types.
// Description: Create a simple “Hello, World!” program in TypeScript.



// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.
// -->

const Hello = () => {
    console.log('Hello World');
}
Hello()

// -----------------------------------------------------------------------------------------

// 🌟 Exercise 2: Type Annotations
// What You Will Learn:

// How to use type annotations in TypeScript.
// How to define and log variables with specified types.
// Description: Use type annotations to specify the types of variables.



// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.
// -->

// let age: number = 25
// let username: string = 'John'
// console.log(username,age);
// -------------------------------------------------------------------------------------------------

// 🌟 Exercise 3: Union Types
// What You Will Learn:

// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.



// Instructions
// Define a variable id that can be either a string or a number.
// -->

// let id: number | string = 1
// ---------------------------------------------------------------------------------------

// 🌟 Exercise 4: Control Flow With If...Else
// What You Will Learn:

// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Description: Use if...else statements to control the flow of a program.



// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// -->

// const myFunc = (num:number):string => {
//     if(num > 0){
//         return 'positive'
//     } else if(num < 0){
//         return 'negative'
//     } else {
//         return 'zero'
//     }
// }

// console.log(myFunc(0));
// -----------------------------------------------------------------------------------------------

// 🌟 Exercise 5: Function Overloading
// What You Will Learn:

// How to use function overloading in TypeScript.
// How to define functions that can accept different types of arguments.
// Description: Use function overloading to define a function that can accept different types and numbers of arguments.



// Instructions
// Create a function called add that can add two numbers together or concatenate two strings.
// -->

// const add = (param1:number | string,param2:number | string):number | string => {
//     if(typeof(param1) === 'number' && typeof(param2) === 'number'){
//         return param1+param2
//     } else if(typeof(param1) === 'string' && typeof(param2) === 'string'){
//         return param1+param2
//     } else {
//         throw new Error('Params needs to be numbers or strings YO!')
//     }
// }

// console.log(add('1','2'));
// ---------------------------------------------------------------------------------

// 🌟 Exercise 6: Tuple Types
// What You Will Learn:

// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.
// Description: Use tuple types to define a function that returns multiple values of different types.



// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// -->

// const getDetails = (name:string,age:number):[[string,number],string] => {
//    return [[name,age],`Hallo ${name} u live already ${age} years`]
// }

// console.log(getDetails('Maksim',12));
// --------------------------------------------------------------------

// 🌟 Exercise 7: Object Type Annotations
// What You Will Learn:

// How to use object type annotations in TypeScript.
// How to define the shape of an object using an interface.
// Description: Use object type annotations to define the shape of an object.



// Instructions
// Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.
// -->

// const createPerson = (name:string,age:number):{name:string,age:number} => {
//     return {name,age}
// }

// console.log(createPerson('Andrew',12));
// --------------------------------------------------------------------------------------

// 🌟 Exercise 8: Type Assertions
// What You Will Learn:

// How to use type assertions in TypeScript.
// How to cast variables to specific types when TypeScript cannot infer the type.
// Description: Use type assertions to specify the type of a variable that TypeScript cannot infer.



// Instructions
// Given an HTML element, use a type assertion to cast it to a specific type and access its properties.
// -->

// const myFunc = () => {
//     let input = document.getElementById('111')
// if(input){
//     let valueOfElement = input as HTMLInputElement
//     return valueOfElement.value
// }
// }
// console.log(myFunc());
// -----------------------------------------------------------------------------------------------------------------

// 🌟 Exercise 9: Switch Statement With Complex Conditions
// What You Will Learn:

// How to use a switch statement in TypeScript.
// How to handle multiple conditions using complex cases in a switch statement.
// Description: Use a switch statement with complex conditions to determine different behaviors.


// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.
// -->

// const getAction = (str: "Man" | "Woman" | "Animal") => {
//     switch (str) {
//         case "Man":
//             return "You're Man"
//         case "Woman":
//             return "You're Woman"
//         case "Animal":
//             return "You're Animal"
//         default:
//             break;
//     }
// }

// console.log(getAction('Animal'));
// --------------------------------------------------------------------------------------------------

// 🌟 Exercise 10: Function Overloading With Default Parameters
// What You Will Learn:

// How to use function overloading in TypeScript.
// How to create overloaded functions with default parameters.
// Description: Create an overloaded function with a default parameter.



// Instructions
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.
// -->

const greet = (name?:string) => {
    if(name){
        return `Hi ${name}`
    } else {
        return `Hi friend`
    }
}

console.log(greet());
