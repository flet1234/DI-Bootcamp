const {users} = require('../config/data.js')

const getUsersById = (req,res)=>{
    req.params
    let x = req.params.id
    let y = users.filter(item =>{
        return item['id']==x
    })
    res.send(y[0])
}

module.exports = {
    getUsersById,
}