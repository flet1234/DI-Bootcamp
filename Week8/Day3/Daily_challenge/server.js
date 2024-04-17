const express = require('express')
const app = express()
const router = require('./routes/route.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(router)


app.listen(3000,()=>{
    console.log('Server is running...');
})