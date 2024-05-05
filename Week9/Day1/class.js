// class NameofClass {
//     constructor(){
//         //.. variables
//         this.x = 5
//     }
//     getX() {
//         return this.x
//     }
//     setX(num){
//         this.x = num
//     }
// }

// const a = new NameofClass()

// console.log(a.getX());

// class SubofNameofClass extends NameofClass {
//     constructor(){
//         super(); 
//         this.y = 6
//     }
// }

// /* arrow function */
// const sum = (x,y)=>{
//     return x+y
// }

// // object

// let obj = {
//     name:'John',
//     age: 25,
// }

// obj.name
// obj['name']

// const {name} = obj

// let name = 'Dan'
// let email = 'dan@gmail.com'

// let user = {name,email}

// function getUser(props) {
//     const {name,email}=props
//     console.log(name,email);
// }

// getUser(user)

// Array

// let arr = [1,2,3]
// const [a] = arr

// const newArr = arr.map((item,i) => {
//     return item*i
// })

// // Promise
// // pending
// // fullfield - resolve
// // reject

// const newpromise = new Promise((resolve, reject) => {
    
// })

// async function x() {
//     throw new Error('err')
// }
// let options = {
//     method:'GET',
//     headers: {
//         'Content-Type':'application/json',
//         'x-access-key':'asfdsdfdsf',
//     },
//     body:JSON.stringify({something})
// }

// fetch(url, options)

let arr = [1]
let arr2 = [...arr]

let obj = {x:1}
let obj2 = {...obj,x:5,y:6}

let y = x ===5? 8:9;