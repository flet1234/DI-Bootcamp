const db = require('../config/config.js')

function _getQuestionByid(id) {
    return db('questions').select('question').where({id})
}

function _getOptionById(id) {
    return db('options').select('option').where({id})
}

function _getOptionIds(id) {
    return db('questions_options').select('option_id').where({question_id:id})
}

function _getAnswerById(id) {
    return db('questions').select('correct_answer').where({id})
}

function _getLeaderboard() {
    return db('quiz_leaderboard').select('name','score').orderBy('score','desc').limit(10)
}

function _postLeaderboard(body) {
    return db('quiz_leaderboard').insert(body).returning(['name','score'])
}

async function _postQuestion(body) {
    let trx
    try {
        const { question ,correct_answer ,options} = body
        const result = await db.transaction(async (transaction) =>{
            trx = transaction
            const [question_id] = await trx('questions').insert({question,correct_answer}).returning('id')
            const option_ids = await Promise.all(options.map(async (option)=>{
                const [optionId] = await trx('options').insert({option}).returning('id')
                return optionId
            }))
            await Promise.all(option_ids.map(async (optionId) =>{
                await trx('questions_options').insert({question_id:question_id.id,option_id:optionId.id})
            }))
        })
        await trx.commit()
        return result
    } catch (error) {
        if(trx){
            await trx.rollback() 
        }
        throw error
        
    }
}


module.exports = {
    _getAnswerById,
    _getOptionIds,
    _getQuestionByid,
    _getOptionById,
    _postQuestion,
    _getLeaderboard,
    _postLeaderboard
}