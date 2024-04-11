// const http = require('http');

// const server = http.createServer((request,response)=>{
//     console.log(request.url);
//     response.end('<h1>Hello from my node server</h1>')
// })

// server.listen(5000)
const express = require('express');

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3001,()=>{
    console.log('Run on 3001');
})


const {users} = require('./config/data.js');


// app.get('/users', (req,res)=>{
//     res.json(users)
// })

app.get('/api/users',(req,res)=>{
    res.json(users)
})

app.get('/api/users/:id', (req,res)=>{
    req.params
    let x = req.params.id
    let y = users.filter(item =>{
        return item['id']==x
    })
    res.send(y[0])
})

app.get('/api/search', (req,res)=>{
    let x = req.query.name
    let y = users.filter(item =>{
        return item.name.toLowerCase().includes(x.toLocaleLowerCase())
    })
    if (y.length == 0){
        return res.status(404).json({msg:'Nobody in there'})
    }
    res.json(y)
})

// {id:3,name:'Kohn',email:'garbcccc@gmail.com'}

app.post('/api/users',(req,res)=>{
    users.push(req.body)
    res.json(users)
})

app.put('/api/users/:id',(req,res)=>{
    let z=req.params.id
    let {name,email}=req.body
    let user = users.find(user=>user.id == z)
    user.name=name
    user.email=email
    res.json(user)
})

app.delete('/api/users/:id',(req,res)=>{
    const id=req.params.id
    console.log(id);
    const index = users.findIndex(item =>item.id == id)
    console.log(index);
    users.splice(index,1)
    res.json(users)
})