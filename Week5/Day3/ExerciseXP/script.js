// #1
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

// -->
// function displayNumbersDivisible(divisor){
//     let numList=[]
//     for (i=0;i<501;i++){
//         if (i%divisor==0){
//             numList.push(i);
//         }
//     } console.log(numList);
//     let number=0
//     for (x of numList){
//         number+=x
//     } console.log(number);
// }
// displayNumbersDivisible(23)
// --------------------------------------------------------------------------

// Exercise 2 : Shopping List
// Instructions
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

// -->
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shopingList=['banana','orange','apple']
// function myBill(){
//     let total_price=0
//     for (i of shopingList){
//         if (stock[i]>0){
//             stock[i]=stock[i]-1
//             total_price+=prices[i]
//         }
//     } return total_price
// }   

// console.log(myBill());
// console.log(stock);
// ---------------------------------------------------------------------

// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// -->
// function changeEnough(itemPrice, amountOfChange){
//     // quarters = amountOfChange[0]
//     // dimes = amountOfChange[1]
//     // nickel = amountOfChange[2]
//     // penny = amountOfChange[3]
//     // quartersCost = 0.25
//     // dimesCost = 0.1
//     // nickelCost = 0.05
//     // pennyCost = 0.01
//     let totalCash=0
//     let cost
//     for (i in amountOfChange){
//         switch(parseInt(i)){
//             case 0:
//                 cost=0.25
//                 break
//             case 1:
//                 cost=0.10
//                 break
//             case 2:
//                 cost=0.05
//                 break
//             default:
//                 cost=0.01
//                 break
//         }
//         totalCash+=amountOfChange[i]*cost
//     } return itemPrice<=totalCash

// }

// console.log(changeEnough(14.11, [2,100,0,0]));
// --------------------------------------------------------------

// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// -->1

// function hotelCost(){
//     let answer
//     do {
//         answer=prompt('How many nights you wanna stay?: ')
//     } 
//     while (isNaN(answer) || answer<0 || answer==undefined || answer=='');
//     let price=140
//     return price*answer
// }

// function planeRideCost(){
//     let price
//     do {
//         answer=prompt('What is your destination?: ').toLowerCase()
//     } 
//     while (!isNaN(answer) || answer==undefined || answer=='');
//     switch (answer){
//         case 'london':
//             price=183
//             break;
//         case 'paris':
//             price=220
//             break;
//         default:
//             price=300
//     }
//     return price
// }

// function rentalCarCost(){
//     let answer
//     do {
//         answer=prompt('For how many days u would ren a car? :')
//     } 
//     while (isNaN(answer) || answer<0 || answer==undefined || answer=='');
//     let price=40
//     if (answer>10){
//         price=price*0.95
//     }
//     return price*answer
// }

// function totalVacationCost(){
//     let car = rentalCarCost()
//     let plane = planeRideCost()
//     let hotel = hotelCost()
//     console.log('The car cost: '+car);
//     console.log('The hotel cost: '+hotel);
//     console.log('The plane cost: '+plane);
//     console.log('Total : '+(car+plane+hotel))
// }
// totalVacationCost()

// -->bonus
// function hotelCost(answerHotel){
//     let price=140
//     return price*answerHotel
// }

// function planeRideCost(answerPlane){
//     let price
//     switch (answerPlane){
//         case 'london':
//             price=183
//             break;
//         case 'paris':
//             price=220
//             break;
//         default:
//             price=300
//     }
//     return price
// }

// function rentalCarCost(answerCar){
//     let price=40
//     if (answerCar>10){
//         price=price*0.95
//     }
//     return price*answerCar
// }

// function totalVacationCost(){
//     let answerHotel
//     let answerCar
//     let answerPlane
//     do {
//         answerHotel=prompt('How many nights you wanna stay?: ')
//     } 
//     while (isNaN(answerHotel) || answerHotel<0 || answerHotel==undefined || answerHotel=='');
//     do {
//     answerCar=prompt('For how many days u would ren a car? :')
//     } 
//     while (isNaN(answerCar) || answerCar<0 || answerCar==undefined || answerCar=='');
//     do {
//     answerPlane=prompt('What is your destination?: ').toLowerCase()
//     } 
//     while (!isNaN(answerPlane) || answerPlane==undefined || answerPlane=='');
//     let car = rentalCarCost(answerCar)
//     let hotel= hotelCost(answerHotel)
//     let plane= planeRideCost(answerPlane)
//     console.log('The car cost: '+car);
//     console.log('The hotel cost: '+hotel);
//     console.log('The plane cost: '+plane);
//     console.log('Total : '+(car+plane+hotel))
// }
// totalVacationCost()
// -----------------------------------------------------------------------------

// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// -->
// console.log(document.body.firstElementChild);
// document.getElementsByTagName('li')[1].textContent='Richard'
// document.getElementsByTagName('ul')[1].getElementsByTagName('li')[1].remove()
// for (i of document.getElementsByTagName('ul')){
//     i.getElementsByTagName('li')[0].textContent='Maksim'
// }
// for (i of document.getElementsByClassName('list')){
//     i.classList.add('student_list')
// }
// document.getElementsByTagName('ul')[0].classList.add('university','attendance')
// document.getElementsByTagName('div')[0].style.backgroundColor='lightblue'
// document.getElementsByTagName('div')[0].style.padding='100px'

// for (i of document.getElementsByTagName('li')){
//     if (i.textContent=='Dan') {
//         i.style.visibility='hidden'
//     }
// }

// for (i of document.getElementsByTagName('li')){
//     if (i.textContent=='Richard') {
//         i.style.border='solid 1px red'
//     }
// }
// document.body.style.fontSize='20px'
// let x
// let y
// if (document.getElementsByTagName('div')[0].style.backgroundColor='lightblue'){
//     x=document.getElementsByTagName('li')[0].textContent
//     y=document.getElementsByTagName('li')[1].textContent
//     alert('Hello '+x+' and '+y)
// } 
// -----------------------------------------------------------------------

// 🌟 Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// -->

