let array = [
    {
        id:0,
        author:'Maksim',
        quote:'You are not you, when you are hungry',
        likes:0
    },{
        id:1,
        author:'Van Dam',
        quote:'Boker is not a doker',
        likes:0
    },{
        id:2,
        author:'Mandarry',
        quote:'When you love, you love',
        likes:0
    }
]
let quoteNumber=0
let autohorArray=[]
let randomNumber
let text
let author

function changeButton(e){
    document.getElementById('generate').textContent='Search Quote'
    if (document.getElementById('search').value===''){
        document.getElementById('generate').textContent='Generate Random Quote'
    } else {document.getElementById('generate').textContent='Search Quote'}
}

function generateQuote(e){
    let butValue=document.getElementById('generate').textContent
    if (butValue=='Generate Random Quote'){
        randomNumber=Math.round(Math.random()*(array.length-1))
        if (quoteNumber == randomNumber){
         generateQuote(e)
        } else {
        text=`<p class="quote">${array[randomNumber].quote}</p>
        <p class="author">${array[randomNumber].author}</p>`
        document.getElementById('quoteCard').innerHTML=text
        quoteNumber=randomNumber}
    } else {
        author=document.getElementById('search').value
        for (item of array){
            if (item.author==author){
                autohorArray.push(item)
            } 
        } if (autohorArray.length==0){
            text=`<p class="quote">Sorry we can not find that author</p>
        <p class="author">Or just delete your search, and try random quote</p>`
        document.getElementById('quoteCard').innerHTML=text
        quoteNumber=randomNumber}
        else {  randomNumber=Math.round(Math.random()*(autohorArray.length-1))
        if (quoteNumber == randomNumber){
         generateQuote(e)
        } else {
        text=`<p class="quote">${autohorArray[randomNumber].quote}</p>
        <p class="author">${autohorArray[randomNumber].author}</p>`
        document.getElementById('quoteCard').innerHTML=text
        quoteNumber=randomNumber}}
        
    }
    document.getElementById('next').style.visibility='visible'
    document.getElementById('previous').style.visibility='visible'
    document.getElementById('hml').style.visibility='visible'
    document.getElementById('hmls').style.visibility='visible'
    document.getElementById('hmw').style.visibility='visible'
    document.getElementById('like').style.visibility='visible'
}

function nextQ(e){
    authorName=document.getElementsByClassName('author')[0].textContent
    for (item of array){
        if (item.author===authorName){
            autohorArray.push(item)
        } }
    if (randomNumber==autohorArray.length-1){
        randomNumber=0
    } 
    else {
        randomNumber+=1
    }
    text=`<p class="quote">${autohorArray[randomNumber].quote}</p>
    <p class="author">${autohorArray[randomNumber].author}</p>`
    document.getElementById('quoteCard').innerHTML=text
    quoteNumber=randomNumber
    }


function previousQ(e){
    authorName=document.getElementsByClassName('author')[0].textContent
    for (item of array){
        if (item.author===authorName){
            autohorArray.push(item)
        } }
    if (randomNumber==0){
        randomNumber=autohorArray.length-1
    } 
    else {
        randomNumber-=1
    }
    text=`<p class="quote">${autohorArray[randomNumber].quote}</p>
    <p class="author">${autohorArray[randomNumber].author}</p>`
    document.getElementById('quoteCard').innerHTML=text
    quoteNumber=randomNumber
}

function addQuote(e){
    e.preventDefault()
    array.push({id:array.length,
    author:document.forms[0]['author'].value,
    quote:document.forms[0]['quote'].value,
    likes:0
    })
    document.forms[0]['quote'].value=''
    document.forms[0]['author'].value=''
}

function howManyLetters(e){
    result=document.getElementsByClassName('quote')[0].innerHTML.length
    document.getElementById('hml').innerHTML=`There is ${result} letters with spaces`
    setTimeout(revertHml,3000)
}

function revertHml(){
    document.getElementById('hml').innerHTML='How many letters?'
}

function howManyLettersWithoutSpaces(e){
    result=document.getElementsByClassName('quote')[0].innerHTML.replace(/ /g,'').length
    document.getElementById('hmls').innerHTML=`There is ${result} letters without spaces`
    setTimeout(revertHmls,3000)
}

function revertHmls(){
    document.getElementById('hmls').innerHTML='How many letters without spaces?'
}

function howManyWords(e){
    result=document.getElementsByClassName('quote')[0].innerHTML.split(' ').length
    document.getElementById('hmw').innerHTML=`There is ${result} words`
    setTimeout(revertHmw,3000)
}

function revertHmw(){
    document.getElementById('hmw').innerHTML='How many words?'
}

function addLike(e){
    for (object of array){
        if (object.quote==document.getElementsByClassName('quote')[0].innerHTML){
            object.likes+=1

            console.log(array);
        }
    } document.getElementById('like').style.visibility='hidden'
}
    