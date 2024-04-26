const url = 'http://localhost:5000/quiz'
const d = document
let questionId
let score

async function startQuiz(e) {
    d.getElementById('leaderboard').style.display='none'
    d.getElementById('start').style.display='none'
    d.getElementById('game').style.display='flex'
    d.getElementsByClassName('score')[0].innerHTML=``
    d.getElementsByClassName('score')[1].innerHTML=``
    d.getElementById('scores').innerHTML=''
    questionId=1
    score=0
    getQuestionById(questionId)
    getOptions(questionId)
}

async function getQuestionById(id) {
    try {
        let res = await fetch(url+`/question/${id}`)
        if (res.status == 404){
            d.getElementById('game').style.display='none'
            
            await saveScore()
        } else{
            let [data] = await res.json()
            d.getElementById("question").innerHTML=data.question
        }
    } catch (error) {
        console.error(error);
    }
}

async function getOptions(questionId) {
    try {
        let res = await fetch(url+`/question/option/${questionId}`)
        if (res.status != 200){
            throw new Error(`Status1 code: ${res.status}`)
        } else{
            let data = await res.json()
            let result
            data.forEach(async element => {
                let optionId = element.option_id 
                res = await fetch(url+`/option/${optionId}`)
                if (res.status != 200){
                    throw new Error(`Status2: ${res.status}`)
                } else{
                    [result] = await res.json()
                    console.log(result);
                    d.getElementById('options').innerHTML+=`<input type="radio" name="option" value="${[result.option]}">
                                                            <label>${[result.option]}</label>`
                } 
            });
        }
    } catch (error) {
        console.error(error);
    }
}

async function getResult(e) {
    e.preventDefault()
    let answer = await getAnswer(questionId)
    let userAnswer = d.forms[0].option.value
    if (answer == userAnswer){
        score+=10
        d.getElementsByClassName('score')[0].innerHTML=`Your score: ${score}`
        d.getElementsByClassName('score')[1].innerHTML=`Your score: ${score}`
    }
    questionId++
    d.getElementById('options').innerHTML=''
    getQuestionById(questionId)
    getOptions(questionId)
}

async function getAnswer(questionId) {
    let result
    try {
        let res = await fetch(url+`/answer/${questionId}`)
        if (res.status != 200){
            throw new Error(`Status2: ${res.status}`)
        } else{
            [result] = await res.json()
            return result.correct_answer
        }
    } catch (error) {
        console.error(error);
    }
}

async function saveScore() {
    let user = prompt('Please enter your name: ')
    d.getElementById('leaderboard').style.display='flex'
    try {
        let res = await fetch(url+`/leaderboard`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name:user,score
            })
        })
        if (res.status != 200){
            throw new Error(`Status code: ${res.status}`)
        } else{
            let res2 = await fetch(url+`/leaderboard`)
            if (res2.status != 200){
                throw new Error(`Status code: ${res2.status}`)
            } else{
                let data = await res2.json()
                data.forEach(async item => {
                    d.getElementById('scores').innerHTML+=`<li>${item.name} : ${item.score}</li>`
                })
            }
        }
    } catch (error) {
        console.error(error);
    }
}