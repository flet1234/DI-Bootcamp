const express = require('express')
const router = express.Router()
const {products} = require('../config/data.js')
const {getAllproducts} = require('../controller/products.controller.js')
const {getProductsById,createProduct,updateProduct,deleteProduct} = require('../controller/products.controller.js')

router.get('/products',getAllproducts)
router.get('/products/:id',getProductsById)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router