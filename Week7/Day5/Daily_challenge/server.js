const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.listen(5000,()=>{
    console.log('Server ON');
})

let emojis = null

const url = 'https://emoji-api.com/emojis?access_key=c9a3c0e945d9f6346e4b98129fa8e4c1d7f9ccd8'

async function getAPI(url) {
    if (!emojis){
        try {
            let response = await fetch(url);
            if (response.status!=200){
                throw new Error(`Status: ${response.status}`)
            }
            else {
                emojis = await response.json();
                return emojis
            }
    } 	catch (error) {
            console.error(error);
    }
    }
	
}

getAPI(url)


const record = []

app.get('/emojis',(req,res)=>{
    res.status(200).json(emojis)
})

app.post('/check',(req,res)=>{
    let {character,unicodeName}=req.body;
    let found = false
    let rightOption
    for (let itemIndex in emojis){
        if (emojis[itemIndex].character == character & emojis[itemIndex].unicodeName == unicodeName){
            console.log('Yeah');
            found = true
            break
        } else if (emojis[itemIndex].character == character){
            rightOption = emojis[itemIndex].unicodeName
        }
    }
    if (found) {
        console.log('Correct guess!');
        res.json({ answer: true });
    } else {
        console.log('Incorrect guess!');
        res.json({ answer: false ,
                unicodeName: rightOption});
    }
})

app.post('/record',(req,res)=>{
    if (record.length != 10){
        record.push(req.body)
    }
    else{
        record.pop()
        record.push(req.body)
    }
    record.sort((a,b)=>b.score-a.score)
    res.json(record)
})

