
const math = require('./module.js')
const math1 = require('./module.js').sum


x = math.sum(5,2)
y = math.multiply(2,2)
console.log(x);
console.log((y));

z=math1(2,3)
console.log(z);