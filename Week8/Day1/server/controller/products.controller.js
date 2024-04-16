const {products} = require('../config/data.js')
const {_getAllProducts,_getProductById,_createProduct,
    _updateProduct,_deleteProduct} = require('../modules/products.modules.js')


const getAllproducts = (req,res)=>{
    _getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
    })
}

const getProductsById = (req,res)=>{
    let x = req.params.id
    _getProductById(x)
    .then(data => {res.send(data)})
    .catch(e=>{
        res.status(404).json({msg:'something went wrong'})
        console.log(e);
    })
}

const createProduct = (req,res) =>{
    let body = req.body
    _createProduct(body).then(data=>{res.json(data)})
    .catch(e=>{
        console.log(e);
    })
}

const updateProduct = (req,res) =>{
    let body = req.body
    let id = req.params.id
    _updateProduct(id,body).then(data=>{res.json(data)})
    .catch(e=>{
        console.log(e);
    })
}

const deleteProduct = (req,res) =>{
    let id = req.params.id
    _deleteProduct(id).then(data=>{res.json(data)})
    .catch(e=>{
        console.log(e);
    })
}



module.exports = {
    getAllproducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
}