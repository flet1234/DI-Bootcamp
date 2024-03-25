
// #1
// let fedor ={
//     fullName:'Fedor',
//     mass:80,
//     height:180,
//     bmi: function () {
//         return this.mass/(Math.sqrt(this.height))
//     }
// }

// let cyberKiler ={
//     fullName:'Kula',
//     mass:90,
//     height:160,
//     bmi: function () {
//         return this.mass/(Math.sqrt(this.height))
//     }

// }

// function showBigGuy(guy1,guy2) {
//     if (guy1.bmi() > guy2.bmi()) {
//         console.log(guy1.fullName);
//     } else if (guy1.bmi() < guy2.bmi()) {
//         console.log(guy2.fullName);
//     } else {console.log("They're equal");}
// }

// showBigGuy(fedor,cyberKiler)

// #2

// let grades=[78,45,56,90,45,67,45,100]

// function findAvg(gradesList){
//     let x=0
//     for (grade of grades) {
//         x+=grade
//     }
//     let result = x/grades.length
//     console.log(result);
//     return result
// }

// function passedOrNot(gradesList){
//     result=findAvg(gradesList)
//     if (result > 65){
//         alert('You passed!!!')
//     }   else {
//             alert('You need to repeat the course')
//     }
// }

// passedOrNot(grades)