// const getx=()=>{
//     return new Promise ((res,rej)=> {
//         setTimeout(() => {
//             res(5)
//         }, 3000);
//     })
// }
// const gety=()=>{
//     return new Promise ((res,rej)=> {
//         setTimeout(() => {
//             res(5)
//         }, 2000);
//     })
// }

// const getxy = () => {
//     loggetx().then
    
// })
// }
// console.log(getxy.then);



const arr = [
         { username: "aaa", email: "aaa@gmail.com" },
         { username: "bbb", email: "bbb@gmail.com" },
         { username: "ccc", email: "ccc@gmail.com" },
];

//  * 1. getDataFromServer function return a Promise with data as
//  * Array of objects from server 
  
//  * Simulate successful completion after 2 seconds
//  *
//  * 2. Call this function and log the data as an Array datatype
//  *
//  * 3. Simulate an error
//  * 
//  * 4. return to step 2, and create render function that will display

function getDataFromServer (arr){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(arr) 
        },2000)
    })
}
getDataFromServer(arr)
    .then((data) => {
        console.log(data);
        return data
    })
    .then(data => {
        for (let x in data){
            console.log(x);
            console.log(data[x].username);
        };
    })
    .catch(eror =>{
        console.log(`eror:${eror}`);
    })

