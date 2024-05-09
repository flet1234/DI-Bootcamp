const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.listen(5000,()=>{
    console.log('Server is running...');
})

app.get('/api/hello',(req,res)=>{
    res.json({msg:'Hello From Express'})
})
app.post('/api/world',(req,res)=>{
    let body = req.body
    console.log(body);
    res.send(`“I received your POST request. This is what you sent me: ${body.data}`)
})