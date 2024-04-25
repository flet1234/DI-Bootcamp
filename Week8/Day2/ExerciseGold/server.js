const express = require('express')
const app = express()
const routes = require('./routes/routes.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api',routes)

app.listen(5000,()=>{
    console.log('Server is running...');
})