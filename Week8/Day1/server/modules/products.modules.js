const {db} = require('../config/data.js')

const _getAllProducts = () => {
    return db('products').select('id','name','price').orderBy('id')
}

const _getProductById = (id) => {
    return db('products').select('id','name','price').where({id})
}

const _createProduct = (body) => {
    return db('products').insert(body).returning(['id','name','price'])
}

const _updateProduct = (id,body) => {
    return db('products').update(body).where({id}).returning(['id','name','price'])
}

const _deleteProduct = (id) => {
    return db('products').del().where({id}).returning(['id','name','price'])
}

module.exports = {
    _getAllProducts,
    _getProductById,
    _createProduct,
    _updateProduct,
    _deleteProduct
}