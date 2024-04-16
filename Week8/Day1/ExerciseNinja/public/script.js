
let url = 'http://localhost:5000/getEmoji'

const getEmojis = async(url) =>{
   try {
    res = await fetch(url)
    if (res.status !=200){
        throw new Error(`Status: ${res.status}`)
    } 
    else{
        data = await res.json()
        let count=0
        for (emoji of data){
            document.getElementById('emojis').innerHTML+=`
            <input type="radio" id="option${count}" name="choice" value="${count}">
            <label for="option${count}count">${emoji}</label>`
            count++
        }
    }
    } 
    catch (error) {
    console.log(error);
    }
}
getEmojis(url)

const validation = (e)=>{
    let input = document.forms[0].name.value
    let lettersOnly = input.replace(/[^A-Za-z]/g,"")
    document.forms[0].name.value=lettersOnly
}

const getGreet = async(e) =>{
    e.preventDefault()
    let name = document.forms[0].name.value
    let emojiIndex = document.forms[0].choice.value
    let data = {name,emojiIndex}
    let urlPost='http://localhost:5000/greet'
    try {
        let res = await fetch(urlPost,{
            method:'post',
            headers:{
              'Content-Type':'application/json'  
            },
            body: JSON.stringify(data)})
            let answer = await res.json()
            console.log(answer);
        document.getElementById('result').innerHTML=`<p>${answer}</p>`
        }
    catch (error) {
        console.log(error);
    }
}
