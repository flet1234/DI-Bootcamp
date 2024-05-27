import jwt from 'jsonwebtoken'

// sign({id:userid, email:usereamil}, secret-code, {expire})

const token = jwt.sign(
    {id:12, email:'jjj@gmail.com', name:'John'},
    '123456',
    {
        expiresIn: 60 * 1000, // 
    }
)

console.log(String(new Date(1716853237)));
console.log(token);

const mytoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoiampqQGdtYWlsLmNvbSIsIm5hbWUiOiJKb2huIiwiaWF0IjoxNzE2NzkzMjM3LCJleHAiOjE3MTY4NTMyMzd9.aqeY1q87MfsMstOrH4iQCMuIrymCot1wfg3KLrz10g4'

// verify(token, secret, (err,decode)=>{})

jwt.verify(mytoken, '123456', (err,decode) => {
    if(err) { return console.log(err.message)}
    console.log(new Date(decode.exp).toLocaleString())
})