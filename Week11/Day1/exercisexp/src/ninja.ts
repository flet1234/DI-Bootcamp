
// const mapType = (param:number|string):number => {
//     if(typeof(param)==='number'){
//         return param ** 2
//     } else {
//         return param.length
//     }
// }

// console.log(mapType('hello'));

// function getProperty<T extends object, K extends keyof T>(obj:T, key:K):T[K] {
//     return obj[key]
// }

// const person = {
//     name: 'John',
//     age: 30,
//     location: 'New York'
// };

// console.log(getProperty(person,'name'));

interface NumericObject {
    [key: string]: number;
}

// Define the generic function with constraints
function multiplyProperty<T extends NumericObject, K extends keyof T>(obj: T, key: K, factor: number): T {
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