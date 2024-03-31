// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // // #1.1 - run in the console:
// funcOne()
// it will be inside the funcOne function 3
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // 0
// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// 0,5 becouse order of calling
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// it will be always 0


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() 
// funcFive()
// -->  'hello' ist property of window, that we give in funcFour, now we showing
// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // // #4.1 - run in the console:
// funcSix()
// --> test, we declare a in function, and call it inside of it
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// 5 and 2 its like in upper case, we declare in if block and outside of it
// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// it will be the same
// ------------------------------------------------------

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
// -->

// function winBattle(){
//     return true;
// }
// const winBattle = () => true
// let experiencePoints= winBattle ? 10 : 1;
// console.log(experiencePoints);
// -----------------------------------------------------------------------

// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false
// -->

// const isString= string => typeof(string)=='string' ? true:false;
// console.log(isString('hello'));
// ------------------------------------------------------------------------

// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// -->

// let sum = (a,b) => a+b
// console.log(sum(5,10));
// ---------------------------------------------------------------------------

// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
// -->

// function kgIng(kgWeight){
//     return kgWeight*1000
// }

// let kgIng = function (kgWeight) {
//     return kgWeight*1000}

// // first is a classic function, second one is a varible with value that is function
// let kgIngLine = (kgWeight) => kgWeight*1000
// console.log(kgIngLine(2));
// ---------------------------------------------------------------------------

// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
// -->

// (function (numberOfChildren,partnersName,geographicLocation,jobTitle){
//     alert(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`)
// })(24,'Doron','Israel','Astronaut')
// -----------------------------------------------------------------------

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
// -->

// (function (name){
//     let newDiv=document.createElement('div')
//     let newText=document.createTextNode(`Welcome ${name}`)
//     let newImg=document.createElement('img')
//     newImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/1/17/Guy_Sebastian_2014.jpg')
//     newDiv.appendChild(newText)
//     newDiv.appendChild(newImg)
//     document.getElementsByTagName('nav')[0].appendChild(newDiv)
// })('Doron')
// -----------------------------------------------------------------------------

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
// -->

// function makeJuice(size){
//     let ingridients=[]
//     function addIngredients(ingr1,ingr2,ingr3){
//         ingridients.push(ingr1)
//         ingridients.push(ingr2)
//         ingridients.push(ingr3)
//     }
//     function displayJuice(){
//             alert(`The client wants a ${size} juice, containing ${ingridients[0]}, ${ingridients[1]}, ${ingridients[2]}".`)
//         }
//     addIngredients('cherry','lemon','apple')
//     addIngredients('apple','cheese','orange')
//     displayJuice()
// }

// makeJuice('small')
