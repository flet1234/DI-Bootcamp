const express = require('express')
const app = express()
const routes = require('./routes/routes.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/game',routes)
app.use(express.static(__dirname + '/public'))

app.listen(5000,()=>{
    console.log('Server is running...');
})