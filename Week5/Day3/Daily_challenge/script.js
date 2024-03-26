// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

// -->
// let mercury = {
//     name:'Mercury',
//     moons:0,
//     color:'grey'
// }
// let venus = {
//     name:'Venus',
//     moons:0,
//     color:'orange'
// }
// let earth = {
//     name:'Earth',
//     moons:1,
//     color:'green'
// }
// let mars = {
//     name:'Mars',
//     moons:2,
//     color:'red'
// }
// let jupiter = {
//     name:'Jupiter',
//     moons:95,
//     color:'brown'
// }
// let saturn = {
//     name:'Saturn',
//     moons:146,
//     color:'yellow'
// }
// let uranus = {
//     name:'Uranus',
//     moons:28,
//     color:'lightblue'
// }
// let neptune = {
//     name:'Neptune',
//     moons:16,
//     color:'blue'
// }

// planetArray=[mercury,venus,earth,mars,jupiter,saturn,uranus,neptune]

// let newDiv
// let newMoon
// console.log(document.body.firstElementChild);
// for (planet in planetArray){
//     newDiv=document.createElement('ul')
//     newDiv.classList.add('planet',planetArray[planet].name)
//     document.body.firstElementChild.appendChild(newDiv)
//     document.getElementsByClassName(planetArray[planet].name)[0].style.background=planetArray[planet].color
//     for (moon=0;moon<planetArray[planet].moons;moon++){
//         newMoon=document.createElement('li')
//         newMoon.classList.add('moon')
//         document.getElementsByClassName(planetArray[planet].name)[0].appendChild(newMoon)
//     }
// }

