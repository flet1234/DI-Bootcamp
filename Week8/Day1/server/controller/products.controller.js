const {products} = require('../config/data.js')

const getAllproducts = (req,res)=>{
    res.json(products)
}

const getProductsById = (req,res)=>{
    req.params
    let x = req.params.id
    let y = products.filter(item =>{
        return item['id']==x
    })
    res.send(y[0])
}

module.exports = {
    getAllproducts,
    getProductsById,
}