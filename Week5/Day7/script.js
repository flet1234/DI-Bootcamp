// Clean the room function:

// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.

// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// -->

// let testList=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'1','1']
// let temp1
// let temp2
// for (i=0;i<=testList.length;i++){
//     for (x=i+1;x<=testList.length;x++)
//         if (testList[i]>testList[x]){
//             temp1=testList[x]
//             testList.splice(x,1)
//             testList.splice(i,0,temp1)
//         }
// }
// console.log(testList);
// for (num=0;num<testList.length;num++){
//     let newList=[testList[num]]
//     let count=1
//     for (num2=num+1;num2<testList.length;num2++){
//         if (testList[num]===testList[num2]){
//             newList.push(testList[num2])
//             count++
//         }
//     } if (newList.length>1){
//         testList.splice(num,count,newList)}
// }
// console.log(testList)
// ----------------------------------------------------------------------
// Question 2:
// Write a javascript function that takes an array of numbers and a target number.

// The function should find two different numbers in the array that, when added together, give the target number.

// For example: answer([1,2,3], 4) should return [1,3]
// -->

// function findNumSum(array,targetNum) {
//     for (num=0;num<array.length;num++){
//         for (x=num+1;x<array.length;x++){
//             if (array[num]+array[x] == targetNum){
//                 let result=[array[num],array[x]]
//                 return result
//             }
//         }
//     }
// }

// console.log(findNumSum([1,2,3,5,8],8));
// ----------------------------------------------------------------
// Question 3:
// Write a function that converts HEX to RGB.

// Then Make that function auto-detect the formats so that if 
// you enter HEX color format it returns RGB and if you enter RGB color 
// format it returns HEX.

// -->
