// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
// -->

// let array=[1,3,7,4,2]
// function sum(array){
//     return array.reduce((total,item)=>{
//         return total+item
//     }) 
// }
// console.log(sum(array));
// --------------------------------------------------------------------------

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.
// -->

// let array=[2,5,4,3,2,1,5,3]
// function fDuplic(array) {
//     return array.filter((item, index) => array.indexOf(item) === index);
// }

// console.log(fDuplic(array));
// console.log(array);
// ---------------------------------------------------------------------------

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// --.>

// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// function shmilter(array){
//     return array.filter(item => Math.abs(item)>0)
// }
// console.log(shmilter(array));
// --------------------------------------------------------------------------

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"
// -->

// let string='ha!'
// function constr(string,n){
//     let part=string
//     while (n>1) {
//         string+=part
//         n--
//     }
//     return string
// } 
// console.log(constr('Ha!',4));
// -------------------------------------------------------------------------------

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'


// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
// -->

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.trim().padStart(9, ' ');
rabbit = rabbit.trim().padStart(9, ' ');
console.log(startLine);
console.log(turtle);
console.log(rabbit);







