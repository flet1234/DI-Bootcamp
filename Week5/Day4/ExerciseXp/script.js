// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// -->
// console.log(document.getElementsByTagName('h1')[0]);

// document.getElementsByTagName('article')[0].lastElementChild.remove()

// document.getElementsByTagName('h2')[0].addEventListener('click',changeBackground)
// function changeBackground(e){
//     e.target.style.background='red'
// }

// document.getElementsByTagName('h3')[0].addEventListener('click',hideElement)
// function hideElement(e){
//     e.target.style.display='None'
// }

// let newButton = document.createElement('button')
// let buttonText = document.createTextNode('make it bold')
// newButton.appendChild(buttonText)
// document.body.appendChild(newButton)
// document.getElementsByTagName('button')[0].addEventListener('click',bolder)
// function bolder(){
//     for (par of document.getElementsByTagName('p'))
//     par.style.fontWeight='bold'
// }

// document.getElementsByTagName('h1')[0].addEventListener('mouseover',fontRandom)
// function fontRandom(e){
//     e.target.style.fontSize=`${(Math.random()*101)}px`
// }

// document.getElementsByTagName('h2')[0].addEventListener('mouseover',changeBackground)
// function changeBackground(e){
//     e.target.style.opacity='0'
//     e.target.style.transition='opacity 1s'
// }
// --------------------------------------------------------------------------

// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// -->
// console.log(document.forms[0]);

// console.log(document.getElementById('fname'));
// console.log(document.getElementById('lname'));
// console.log(document.getElementById('submit'));

// console.log(document.getElementsByName('firstname')[0]);
// console.log(document.getElementsByName('lastname')[0]);


// let firstName
// let lastName
// let newLiFName
// let newLiLName
// let newFtext
// let newLtext
// document.forms[0].addEventListener('submit',getUserInput)
// function getUserInput(){
//     event.preventDefault()
//     firstName=document.getElementsByName('firstname')[0].value
//     lastName=document.getElementsByName('lastname')[0].value
//     if (firstName != null && firstName != ''){
//         if (lastName != null && lastName != ''){
//     newLiFName=document.createElement('li')
//     newLiLName=document.createElement('li')
//     newFtext=document.createTextNode(firstName)
//     newLtext=document.createTextNode(lastName)
//     newLiFName.appendChild(newFtext)
//     newLiLName.appendChild(newLtext)
//     document.getElementsByClassName('usersAnswer')[0].appendChild(newLiFName)
//     document.getElementsByClassName('usersAnswer')[0].appendChild(newLiLName)
//             } 
//         } else {alert("it's too empty here")}
//     }
// -------------------------------------------------------------------------------------

// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// -->
// let allBoldItems
// function getBoldItems(){ 
//      allBoldItems=[]
//     for (words of document.getElementsByTagName('strong')){
//         allBoldItems.push(words.textContent)
//         } return allBoldItems
//     } 

// function highlight(){
//     for (words of document.getElementsByTagName('strong')){
//         words.style.color='blue'
//     }
    
// }
// function returnItemsToDefault(){
//     for (words of document.getElementsByTagName('strong')){
//         words.style.color='black'
//     }
// }
// for (item of document.getElementsByTagName('p')){
//     item.addEventListener('mouseover',highlight)
// }
// for (item of document.getElementsByTagName('p')){
//     item.addEventListener('mouseout',returnItemsToDefault)
// }
// ----------------------------------------------------------------------






