const express = require('express')
const app = express()
const router = require('./routes/router.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('./public'))
app.use(router)

app.listen(5000,()=>{
    console.log('Server is on...');
})