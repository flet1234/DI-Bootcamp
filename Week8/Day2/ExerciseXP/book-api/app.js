const express = require('express')
const app = express()
const router = require('./routes/route.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/books',router)

app.listen(5000,()=>{
  console.log('Server is running...');  
})