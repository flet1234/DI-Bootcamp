// 🌟 Exercise 2: Advanced Module Usage Using ES6 Module Syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

export const people = [
    { name: 'Alice', age: 30, location: 'New York' },
    { name: 'Bob', age: 25, location: 'Los Angeles' },
    { name: 'Charlie', age: 35, location: 'Chicago' },
    { name: 'David', age: 40, location: 'Houston' },
    { name: 'Eve', age: 28, location: 'Miami' }
];