const express = require('express')
const app = express()
const router = require('./routes/route.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(5000,()=>{
    console.log('Server is running...');
})