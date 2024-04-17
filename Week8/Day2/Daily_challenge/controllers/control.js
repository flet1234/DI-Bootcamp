const {
    _loginUser,
    _getAllUsers,
    _getUserById,
    _updateUser,
    _registerUser
} = require('../models/modules.js')
const bcrypt = require('bcrypt')
const db = require('../config/config.js')

function getAllUsers(req,res) {
    _getAllUsers().then(data=>{
        res.json(data)
    })
}

function getUserById(req,res) {
        _getUserById(parseInt(req.params.id)).then(data=>{
        res.json(data)
    })
}

const hashPassword = async (password, saltRounds) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};


async function registerUser(req,res) {
    let {username,password,first_name,last_name,email} = await req.body
    let body = {username,first_name,last_name,email}
    console.log(password)
    let hashedPassword = await hashPassword(password,10)
    console.log(hashedPassword);
    let usernameAndHash = {username,password:hashedPassword}
    _registerUser(body,usernameAndHash).then(data=>{
        res.json(data)
    })
}

function updateUser(req,res) {
    let {username} = req.body
    _updateUser(parseInt(req.params.id),req.body,username).then(data=>{
        res.json(data)
    })
}

async function loginUser(req,res) {
    let {username,password} = req.body
    let query = await db('hashpwd').select('password').where({username}).first()
    let hashedPassword=query.password
    let result = await compare(password,hashedPassword)
    if (result){
        _loginUser(username).then(data=>{
        res.json(data)})
    }
    else{
        res.json({msg:'Wrong password'})
    }
}

const compare = async (password, hash) => {
    try {
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    updateUser,
    getUserById,
    getAllUsers,
    registerUser,
    loginUser
}