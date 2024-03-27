// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>


// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// -->

let par
let parText

setTimeout(() => {alert('Hello World')
}, 2000);

setTimeout(() => {
    par=document.createElement('p')
    parText=document.createTextNode('Hello World')
    par.appendChild(parText)
    document.getElementById('container').appendChild(par)
}, 2000);

timer=setInterval(() => {
    if (document.querySelectorAll('#container > *').length > 4){
        clearInterval(timer)
    } else{
       par=document.createElement('p')
    parText=document.createTextNode('Hello World')
    par.appendChild(parText)
    document.getElementById('container').appendChild(par)
} 
}, 2000);
    

document.getElementById('clear').addEventListener('click',stopWorld)
function stopWorld(){
    clearInterval(timer)
}
