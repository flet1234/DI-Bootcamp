const db = require('../config/config.js')

const _getAllBooks = () =>{
    return db('books').select('id','title','author','publishedyear').orderBy('id')
}

const _getBookById = (id) => {
    return db('books').select('id','title','author','publishedyear').where({id})
}

module.exports={
    _getAllBooks,
    _getBookById
}