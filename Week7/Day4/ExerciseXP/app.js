// import {people} from './data.js';

// const average = (array) => {
//     let age = array.map(item=>{
//         return item.age
//     })
//     let sum=age.reduce((accum,item) => {
//         return accum+item
//     },0)
//     return sum/array.length
// }

// console.log(average(people));
// -------------------------------------------------------------
const fs = require('./fileManager.js')

fs.readFile('Hello_World.txt','utf-8', function(err,data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})
fs.writeFile('Bye World.txt','writing to the file',function(err){
    if (err){
        console.log(err);
    }
    else{
        console.log('Writed');
    }
})

