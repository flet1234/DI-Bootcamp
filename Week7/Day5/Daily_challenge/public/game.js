let cachedData = null

async function getData(url) {
    if (!cachedData){
        try {
            let res = await fetch(url)
            if (res.status != 200){
                throw new Error(`Status: ${res.status}`)
            }  
            else{
                cachedData = await res.json()
                return cachedData
            }
        } catch (error) {
            console.log(error);
        }
    }
}
let url=('http://localhost:5000/emojis')
let lifeCount=3
let score = 0



async function start(e) {
    // document.getElementById('start').style.display='none'
    document.getElementById('send').style.display='block'
    cachedData = await getData(url)
    getQuestion(cachedData)
}

function getQuestion(emojis) {
    timePlace.innerHTML=`<h2>10</h2>`
    startTimer()
    let randomSet= new Set()
    while (randomSet.size<3){ 
        randomSet.add(Math.floor(Math.random()*emojis.length))
    }
    let randomNums=Array.from(randomSet)
    let random = randomNums[0]
    let random2 = randomNums[1]
    let random3 = randomNums[2]
   
    let randomEmojiObject = emojis[random]
    let {character, unicodeName} = randomEmojiObject
    let name2 = emojis[random2].unicodeName
    let name3 = emojis[random3].unicodeName
    let viewName = replaceUniCode(unicodeName)
    let viewName2 = replaceUniCode(name2)
    let viewName3 = replaceUniCode(name3)
    let emojiPlace = document.getElementById('emoji')
    let namePlace = document.getElementById('names')
    emojiPlace.innerHTML=`<p>${character}</p>`
    let randomPosition=Math.floor(Math.random()*3)
    if (randomPosition==0){
        namePlace.innerHTML=`
    <input type="radio" id="name2" name="name" value="${name2}">
    <label  for="name2">1) ${viewName2}</label>
    
    <input type="radio" id="name" name="name" value="${unicodeName}">
    <label  for="name">2) ${viewName}</label>
    
    <input type="radio" id="name3" name="name" value="${name3}">
    <label  for="name3">3) ${viewName3}</label>`
    } else if (randomPosition==1){
        namePlace.innerHTML=`
    <input type="radio" id="name2" name="name" value="${unicodeName}">
    <label  for="name2">1) ${viewName}</label>
    
    <input type="radio" id="name" name="name" value="${name2}">
    <label  for="name">2) ${viewName2}</label>
    
    <input type="radio" id="name3" name="name" value="${name3}">
    <label  for="name3">3) ${viewName3}</label>`
    } else {
        namePlace.innerHTML=`
    <input type="radio" id="name2" name="name" value="${name3}">
    <label  for="name2">1) ${viewName3}</label>
    
    <input type="radio" id="name" name="name" value="${name2}">
    <label  for="name">2) ${viewName2}</label>
    
    <input type="radio" id="name3" name="name" value="${unicodeName}">
    <label  for="name3">3) ${viewName}</label>`
    }
    
}

async function sendResult(e) {
    e.preventDefault()
    stopTimer()
    clearInterval(interval)
    let result = document.forms[0].name.value
    let emojiPic = document.getElementById('emoji').textContent
    let guess = {character:emojiPic, unicodeName:result}

    try {
        let urlCheck = 'http://localhost:5000/check'
        let option = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(guess)
    }   
        let res = await fetch(urlCheck,option)
        if (res.status !=200){
            throw new Error(`Status: ${res.status}`)
        }
        else{
            let result = await res.json()
            let {answer,unicodeName} = result
            if (answer){
                alert(`Right!`)
                score+=10
                document.getElementById('score').textContent=`User score: ${score}`
            }
            else{
                let name = replaceUniCode(unicodeName)
                alert(`Wrong! It was: ${name}` )
                lifeCount-=1
                document.getElementById('lives').lastElementChild.remove()
            }
            if (lifeCount>0){
                getQuestion(cachedData)
            } 
            else {
                await end()
            }
            
        }    
    } catch (error) {
        console.log(error);
    }
}

function restart(e) {
    window.location.reload()
}

async function end() {
    try {
        record = {name:prompt('Enter your name: '), score:score}
        let urlScore = 'http://localhost:5000/record'
        let option = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(record)
        } 
        res = await fetch(urlScore,option)
        if (res.status !=200){
            throw new Error(`Status: ${res.status}`)
        }
        else{
            let root = document.getElementById('root')
            let results = await res.json()
            root.innerHTML=`<h1>End of lives</h1>
            <h2>Score: ${score}</h2>
            <button id="restart" onclick="restart(event)">restart</button>
            <h2>Leaderboard</h2>
            <div id = "leaderboard">
            </div>
            `
            let leaderboard=''
            for (let indexItem in results){
                leaderboard+=`
                <div>${results[indexItem].name} : ${results[indexItem].score}<div>`
            }
            document.getElementById('leaderboard').innerHTML=leaderboard
        }
    } catch (error) {
        console.log(error);
    }
}

let timePlace = document.getElementById('timer')
let timer
let interval
let timeLimit = 1000*10
let timeStart=9
let intervalTime=1000


 function startTimer() {
    time()
    timer = setTimeout (()=>{
        alert(`Time out!`)
        lifeCount-=1
        document.getElementById('lives').lastElementChild.remove()
        if (lifeCount>0){ 
            clearInterval(interval)
            getQuestion(cachedData)
        } 
        else {
            end()
        }
    },timeLimit)
}

function stopTimer() {
    clearTimeout(timer)
}


function time () {
    timeStart=9
    interval = setInterval(()=>{
        if (timeStart >-1){
            timePlace.innerHTML=`<h2>${timeStart}</h2>`
            timeStart-=1
        }
        else {
            clearInterval(interval)
        }
    },intervalTime)
}

function replaceUniCode(string) {
    let index = string.indexOf(' ')
    if (index !==-1) {
        return string = string.substring(index + 1)
    }
}

