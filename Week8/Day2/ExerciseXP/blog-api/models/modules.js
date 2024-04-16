const db = require('../config/config.js')

const _getAllPosts = () =>{
    return db('posts').select('id','title','content').orderBy('id')
}

const _getPostById = (id) => {
    return db('posts').select('id','title','content').where({id})
}

const _postPost = (id,body) => {
    return db('posts').insert(body).returning(['id','title','content'])
}

const _updatePost = (id,body) => {
    return db('posts').update(body).where({id}).returning(['id','title','content'])
}

const _delPost = (id,body) => {
    return db('posts').del().where({id}).returning(['id','title','content'])
}

module.exports={
    _delPost,
    _getAllPosts,
    _getPostById,
    _updatePost,
    _postPost
}