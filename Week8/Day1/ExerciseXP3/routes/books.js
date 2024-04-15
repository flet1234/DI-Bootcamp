const express = require('express')
const router = express.Router()
const {getAllBooks,deleteBook,updateBook,addBook} = require('../controllers/books.js')

router.get('/',getAllBooks)

router.post('/',addBook)

router.put('/:id',updateBook)

router.delete('/:id',deleteBook)

module.exports=router