
// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

//In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// -->

// function compareToTen(num){
//     return new Promise((res,rej)=>{
//         if (num <=10){
//             res(num)
//         } else {rej (`Eror: ${num}>10`)}})
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// -----------------------------------------------------------------

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// -->

// const x = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res('success')
//     }, 4*1000);
// })

// x.then(data=>{
//     console.log(data);
// })
// -------------------------------------------------------------

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
// -->

// let x = Promise.resolve(3)
// x.then((num) => {
//     console.log(num);
// })

// let y = Promise.reject('Boo')
// y.catch((eror)=> {
//     console.log(eror)})
// -------------------------------------------------------

    