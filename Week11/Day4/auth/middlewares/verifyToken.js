import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const {ACCESS_TOKEN_SECRET} = process.env

export const verifyToken = (req, res, next) => {
    const accesstoken = req.cookies.token || req.headers['x-access-token']

    if(!accesstoken) return res.status(401).json({msg:'unatorized'})

    jwt.verify(accesstoken, ACCESS_TOKEN_SECRET, (err, decode)=>{
        if(err) return res.status(403).json({msg:'forbidden'})
        // set user info request
        req.userid = decode.id
        req.useremail = decode.email
    })

    next()
}