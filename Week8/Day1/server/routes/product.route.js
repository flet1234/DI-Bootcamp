const express = require('express')
const router = express.Router()
const {products} = require('../config/data.js')
const {getAllproducts} = require('../controller/products.controller.js')
const {getProductsById} = require('../controller/products.controller.js')

router.get('/products',getAllproducts)
router.get('/products/:id',getProductsById)

module.exports = router