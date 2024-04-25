const modules = require('../modules/modules.js')

function getTodo(req,res) {
    modules._getTodo().then(data => {
        res.json(data)
    })
}

function getTodoById(req,res) {
    modules._getTodoById(parseInt(req.params.id))
    .then(data => {
        if (data.length > 0){
            res.json(data)
        }
        else{
            res.status(404).json({msg:'No such id'})
        }})
    .catch(error => {
        console.error(error)
        res.status(500).json({msg:'Internal server error'})
    })
}

function postTodo(req,res) {
    let body = req.body
    modules._postTodo(body)
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({msg:'Internal server error'})
    })
}

function updateTodo(req,res) {
    let body = req.body
    let id = parseInt(req.params.id)
    modules._updateTodo(body,id)
    .then(data => {
        if (data.length > 0){
            res.json(data)
        } else {
            res.status(404).json({msg:'No such id'})
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({msg:'Internal server error'})
    })
}

function deleteTodo(req,res) {
    let id = parseInt(req.params.id)
    modules._deleteTodo(id)
    .then(data => {
        if (data.length>0){
            res.json(data)
        } else {
            res.status(404).json({msg:'No such id'})
        }
    })
    .catch(error => {
        console.error(`Error with delete opereation :${error}`);
        res.status(500).json({msg:'Internal server error'})
    })
}

module.exports = {
    getTodo,
    getTodoById,
    postTodo,
    updateTodo,
    deleteTodo
}