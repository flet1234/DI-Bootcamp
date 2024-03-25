// Exercise 1
// const people = ["Greg", "Mary", "Devon", "James"];

// 1
// for (i in people) {
//     if (people[i] == 'Greg') {
//         people.splice(i,1)
//     }
// }
// console.log(people);

// 2
// for (i in people) {
//     if (people[i] == 'James') {
//         people.splice(i,1,'Jason')
//     }
// }
// console.log(people);

// 3
// people.push('Maksim')
// console.log(people);

// 4
// console.log(people.indexOf('Mary'));


// 5
// const people = ["Mary", "Devon", "Jason", "Yourname"]
// let newArray=people.slice(1,3)
// console.log(newArray);

// 6
// console.log(newArray.indexOf('Foo'));

// 7
// let last=newArray[newArray.length-1]
// console.log(last);

// Exercise 2
// let colors=['blue','green','yellow','black','red']
// let suf;
// for (i of colors){
//     switch (colors.indexOf(i)) {
//         case 0:
//             suf='st'
//             break;
//         case 1:
//             suf='nd'
//             break;
//         case 2:
//             suf='rd'
//             break;
//         default:
//             suf='th'
//             break;
//     }
//     console.log('My #'+(colors.indexOf(i)+1)+suf+'choise is '+i);
// }

// Exercise 3
// let userInput
// do {
//     userInput=prompt('input a number')
// }
// while (isNaN(parseInt(userInput)) || userInput<10);

// Exercise 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1],building.numberOfRoomsAndRent.dan[0]);
// console.log(building.numberOfRoomsAndRent.dan[1])
// if (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1]=1200
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5
// let family = {
//     dad : 'Andry',
//     mom : 'Jorj',
//     son : 'Gerchibald Saksonski II'
// };
// for (i in family) {
//     console.log(i);
// }
// for (i in family) {
//     console.log(family[0])
// }

// Exercise 6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// let string=''
// for (i in details){
//     string=string+' '+i+' ' + details[i];
// }
// console.log(string);

// Exercise 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let result=[]
// for (i of names.sort()){
//     result.push(i[0])
// }
// console.log(result.join(''));

