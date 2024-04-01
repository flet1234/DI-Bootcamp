// arr=[1,2,3,4]
// function mult(numbers){
//   arr.forEach((item,index,arr) => {
//     arr[index]=item*2
// })
//     return numbers
// };
// console.log(mult(arr));
// console.log(arr);

// function game(nums) {
//   let result=[]
//   nums.forEach((item)=>{
//     if (item>3){
//       result.push(item)
//     }
//   }) 
//   return result
// }


// console.log(game([0,1,1,2,3,5,8]));

// let arrObj=[
// {name:'john', id:1},
// {name:'Marry', id:2},
// {name:'Or', id:3}
// ]

// let newAr=arrObj.filter((item) => {
//   return item.name.toLowerCase().includes('o')
// })

// console.log(newAr);

// function candles(list){
//   count=0
//   list.forEach(item => {
//     if (item>count){
//       count=item
//     }})
//   let candles=list.filter(item => item==count
//   );
//   return candles.length
//  }

// console.log(candles([2,8,8,2,4,1,5,8]));



let [...x]='hogwarts'
console.log(x);