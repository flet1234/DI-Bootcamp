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
    let {username,password,first_name,last_name,email} = req.body
    if((await db('usersdc').select('username').where({username})).length>0){
        res.json({msg:"User with that username already exist"})
        return
    }
    if((await db('usersdc').select("email").where({email})).length>0){
        res.json({msg:"User with that email already exist"})
        return
    }
    else{
        let hashedpassword = await hashPassword(password,10)
        let body = {username,first_name,last_name,email}
        _registerUser(body,hashedpassword).then(data=>{
        res.json({msg:"Registered!"})
    })
    }
   
}

function updateUser(req,res) {
    _updateUser(parseInt(req.params.id),req.body).then(data=>{
        res.json(data)
    })
}

async function loginUser(req,res) {
    let {username,password} = req.body
    if((await db('usersdc').select('username').where({username})).length==0){
        res.json({msg:"User with that username not registered"})
        return
    }
    let [user_id] = await db('usersdc').select('id').where({username})
    let queryPw = await db('hashdc').select('hash_password').where({user_id:user_id.id}).first()
    let hashedPassword= await queryPw.hash_password
    let result = await compare(password,hashedPassword)
    if (result){
        _loginUser(username).then(data=>{
        res.json({msg:`Welcome ${data[0].first_name}`})})
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