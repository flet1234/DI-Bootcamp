"use strict";
// const mapType = (param:number|string):number => {
//     if(typeof(param)==='number'){
//         return param ** 2
//     } else {
//         return param.length
//     }
// }
// Define the generic function with constraints
function multiplyProperty(obj, key, factor) {
    obj[key] = obj[key] * factor;
    return obj;
}
// Example usage
const item = {
    price: 100,
    quantity: 5
};
const updatedItem = multiplyProperty(item, 'price', 2);
console.log(updatedItem);
