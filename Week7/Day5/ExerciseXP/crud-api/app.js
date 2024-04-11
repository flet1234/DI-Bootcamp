const express = require('express')
const app = express()
const {fetchPosts} = require('./data/dataService.js')

app.listen(5000,()=>{
    console.log("Walls are listening...");
})

app.get('/data', async (req,res)=>{
    let data = await fetchPosts('https://jsonplaceholder.typicode.com/posts')
    res.send(data)
})

