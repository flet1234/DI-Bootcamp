const {
    _delPost,
    _getAllPosts,
    _getPostById,
    _updatePost,
    _postPost
} = require('../models/modules.js')

function getAllPosts(req,res) {
    _getAllPosts().then(data=>{
        res.json(data)
    })
}

function getPostById(req,res) {
        _getPostById(parseInt(req.params.id)).then(data=>{
        res.json(data)
    })
}

function postPost(req,res) {
    _postPost(parseInt(req.params.id),req.body).then(data=>{
        res.json(data)
    })
}

function updatePost(req,res) {
    _updatePost(parseInt(req.params.id),req.body).then(data=>{
        res.json(data)
    })
}

function delPost(req,res) {
    _delPost(parseInt(req.params.id)).then(data=>{
        res.json(data)
    })
}

module.exports = {
    delPost,
    postPost,
    updatePost,
    getAllPosts,
    getPostById
}