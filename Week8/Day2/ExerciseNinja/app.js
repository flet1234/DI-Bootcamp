const express = require('express')
const app = express()
const router = require('./routers/router.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/quiz',router)
app.use(express.static(__dirname +'/public'))

app.listen(5000,()=>{
    console.log('Server is running...');
})