const {
    _delTask,
    _getAlltasks,
    _postTask,
    _updateTask,
    _getTaskById
} = require('../models/modules.js')

function getAlltasks(req,res) {
    _getAlltasks().then(data=>{
        res.json(data)
    })
}

function getTaskById(req,res) {
        _getTaskById(parseInt(req.params.id)).then(data=>{
            if (data.length == 0){
                res.status(404).json({msg:"There is no task with such id"})
                return
            }
        res.json(data)
    })
}

function postTask(req,res) {
    let {name,date} = req.body
    if (date===undefined){
        let today = new Date()
        let year = today.getFullYear()
        let month = String(today.getMonth()+1).padStart(2,'0')
        let day = String(today.getDate()).padStart(2,'0')
        date = `${year}/${month}/${day}`
    }
    if (!dateValidation(date)){
        res.status(500).json({msg:"Wrong data, use string for name and YYYY/MM/DD for date"})
        return
    }
    if (typeof name=='string' && typeof date=='string'){
        let body = {name,date}
        _postTask(body).then(data=>{
        res.json(data) 
    });
    } else {
        res.status(500).json({msg:"Wrong data, use string for name and YYYY/MM/DD for date"})
    }
}


function updateTask(req,res) {
    _updateTask(parseInt(req.params.id),req.body).then(data=>{
        if (data.length == 0){
            res.status(404).json({msg:"There is no task with such id"})
            return
        } 
        res.json(data)
    })
}

function delTask(req,res) {
    _delTask(parseInt(req.params.id)).then(data=>{
        if (data.length == 0){
            res.status(404).json({msg:"There is no task with such id"})
            return
        } 
        res.json(data)
    })
}

const dateValidation = (dateString) => {
    let pattern = /^\d{4}\/\d{2}\/\d{2}$/;
    return pattern.test(dateString)
}


module.exports = {
    delTask,
    postTask,
    updateTask,
    getAlltasks,
    getTaskById
}