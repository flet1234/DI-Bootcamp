const express = require('express')
const app = express()
const router = require('./routes/route.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/posts',router)

app.listen(3000,()=>{
    console.log('Server is running...');
})