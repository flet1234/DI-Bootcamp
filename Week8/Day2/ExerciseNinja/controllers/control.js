const modules = require('../modules/modul.js')

function getQuestionById(req,res) {
    let questionId = parseInt(req.params.id)
    modules._getQuestionByid(questionId)
    .then(data=>{
        if(data.length>0){
            res.json(data)
        } else{
            res.status(404).json({msg:'No such id'})
        }
    })
    .catch(er =>{
        console.error(er);
    })
}

function getOptionById(req,res) {
    let optionId = parseInt(req.params.id)
    modules._getOptionById(optionId)
    .then(data => {
        if (data.length>0){
            res.json(data)
        } else {
            res.status(404).json({msg:'No such id'})
        }
    })
    .catch(er => {
        console.error(er);
    })
}   

function getOptionIds(req,res) {
    let questionId = parseInt(req.params.id)
    modules._getOptionIds(questionId)
    .then(data => {
        if (data.length > 0){
            res.json(data)
        } else {
            res.status(404).json({msg:'No such ids'})
        }
    })
    .catch(er => {
        console.error(er);
    })
}

function getAnswerById(req,res) {
    let questionId = parseInt(req.params.id)
    modules._getAnswerById(questionId)
    .then(data => {
        if (data.length > 0){
            res.json(data)
        } else{
            res.status(404).json({msg:'No such id'})
        }
    })
    .catch(er => {
        console.error(er);
    })
}

function postQuestion(req,res) {
    let body = req.body
    modules._postQuestion(body)
    .then(data => {
       res.json({msg:'Added successfully'})
    })
    .catch(er => {
        console.error(er);
    })
}

function getLeaderboard(req,res) {
    modules._getLeaderboard()
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.error(e);
    })
    }

function postLeaderboard(req,res) {
    let body = req.body
    modules._postLeaderboard(body)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.error(e);
    })
}

module.exports = {
    postQuestion,
    getAnswerById,
    getOptionById,
    getOptionIds,
    getQuestionById,
    getLeaderboard,
    postLeaderboard
}