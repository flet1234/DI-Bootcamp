
const express = require('express');
const user_router = require('./routes/users.route.js')
const products_router = require('./routes/product.route.js')
const {logger,
        auth,} = require('./midlewres/utils.js')

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(3001,()=>{
    console.log('Run on 3001');
})


app.use('/users',logger)
// app.use(auth)
app.use('/users',user_router)
app.use(products_router)