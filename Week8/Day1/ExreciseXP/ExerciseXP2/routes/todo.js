const express = require('express')
const router = express.Router()

const todos=[]

function getAll(req,res) {
    res.send(todos)
}

function addOne(req,res) {
    let {name} = req.body
    let newItem = {
        id:todos.length+1,
        name,
        complete:false
    }
    todos.push(newItem)
    res.send(todos)
}

function updateOne(req,res) {
    let id = req.params.id
    let {name,complete} = req.body
    id = parseInt(id)
    for (item of todos){
        if (item.id==id){
            item.name = name,
            item.complete = complete
            res.send(todos)
            return 
        }
    }
    return res.status(404).send('Item not found')
}

function deleteOne(req,res) {
    let id=req.params.id
    let index = todos.findIndex(item => item.id == id)
    if (index!=-1){
        todos.splice(index,1)
        res.send(todos)
    }
    else{
        res.status(404).send('Item not found')
    } 
}

router.get('/',getAll)
router.post('/',addOne)
router.put('/:id',updateOne)
router.delete('/:id',deleteOne)

module.exports = {
    router,
    todos
}