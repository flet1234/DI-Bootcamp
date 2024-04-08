// fetch('https://jsonplaceholder.typicode.com/users',{
//     method: 'GET',
// })
// .then(response => {
//     console.log(response);
//     return response
// })
// .then(data=>{
//     console.log(data);
// })

// function getAJoke() {
//     const url = 'https://jokes-always.p.rapidapi.com/joke';
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd60017c974msh26055e258bf6662p1ccadbjsn0f7a7311752b',
// 		'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com'
// 	}
// };  fetch(url,options)
//     .then(res=>{
//         return res.json();
//     })
//     .then(joke=>
//     document.getElementById('root').innerHTML=joke.data)
// }

// getAJoke()


// let post ={
//     userId:6,
//     title:'my title',
//     body:'bla bla bla bla'
// }


// let url='https://jsonplaceholder.typicode.com/posts'
// let options ={
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json',
//     },
//     body: JSON.stringify(post)
// }
// fetch(url,options)
//     .then(res=>{
//     return res.json()
// })
//     .then(data=>{
//     console.log(data);
// })


let post ={
    name:prompt('Name: '),
    username:prompt('Username: '),
    email:prompt('Email: ')
}



let url = 'https://users-18kl.onrender.com/userjson'
let options = {
    method:'post',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(post)
}

fetch(url,options)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data);
        // let html = data.map(item=>{
        //     return `<div>${item.name}</div>`
        // })
        // document.getElementById('root').innerHTML=html.join('')
        data.forEach(element => {
            document.getElementById('root').innerHTML+=`${element.name} ${element.username} ${element.email} <br>`
    })})
    .catch(err=>{
        console.log(err);
    })