// const greeting = require('./main.js')

// console.log(greeting);
// greeting.greeting('Daniel')

// const math = require('./module.js')

// x = math.sum(5,2)
// y = math.multiply(2,2)
// console.log(x);
// console.log((y));

// const {getArray} = require('./modules/arrayAPIModule.js')
// let url = 'https://jsonplaceholder.typicode.com/users'
// getArray(url).then(data=>{console.log(data);});

const {hash}=require('./hash.js')

hash('qwer12345').then(data=>{console.log(data)})
