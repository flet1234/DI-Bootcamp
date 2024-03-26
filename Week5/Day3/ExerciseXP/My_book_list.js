
// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// let mowgli={
//     title:'Mowgli of the Jungle Book',
//     author:'Rudyard Kipling',
//     image :'https://m.media-amazon.com/images/I/81DnJ2--9uL._SY522_.jpg',
//     alreadyRead: true
// }
// let bobTheBook={
//     title:'Bob the Book',
//     author:'David Pratt',
//     image :'https://m.media-amazon.com/images/I/71vR+pLZTVL._SL1360_.jpg',
//     alreadyRead: false
// }

// let allBooks=[mowgli,bobTheBook]

// let text
// let li
// let newDiv=document.createElement('ul')
// for (i in mowgli){
//     li=document.createElement('li')
//     if (i=='image'){
//         let img=document.createElement('img')
//         img.src=mowgli[i]
//         img.width='100'
//         li.appendChild(img)
//         newDiv.appendChild(li)
//     }  else{
//             text=document.createTextNode(mowgli[i])
//             li.appendChild(text)
//             newDiv.appendChild(li)
//     } 
   
// }
// document.getElementsByTagName('section')[0].appendChild(newDiv)

// newDiv=document.createElement('ul')
// for (i in bobTheBook){
//     li=document.createElement('li')
//     if (i=='image'){
//         let img=document.createElement('img')
//         img.src=bobTheBook[i]
//         img.width='100'
//         li.appendChild(img)
//         newDiv.appendChild(li)
//     }  else{
//     text=document.createTextNode(bobTheBook[i])
//     li.appendChild(text)
//     newDiv.appendChild(li)
//     }
// }
// document.getElementsByTagName('section')[0].appendChild(newDiv)
// for (x of document.getElementsByTagName('ul')){
//     if (x.lastElementChild.textContent=='true') {
//         x.style.color='red'
//     }
// }

