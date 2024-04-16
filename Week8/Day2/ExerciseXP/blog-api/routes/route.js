const express = require('express')
const {
    delPost,
    postPost,
    updatePost,
    getAllPosts,
    getPostById
} = require('../controllers/control.js')
const router = express.Router()

router.get('/',getAllPosts)

router.get('/:id',getPostById)

router.post('/',postPost)

router.put('/:id',updatePost)

router.delete('/:id',delPost)

module.exports = router