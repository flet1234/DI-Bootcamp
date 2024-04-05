let uside='o'
let iside='x'
let box=document
let winner
let counter
let draw
let drawTest

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let field = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

function sideX(e){
    uside='x'
    iside='o'
    document.getElementById('sidex').style.border='solid green 2px'
    document.getElementById('sidex').disabled=true
    document.getElementById('sideo').disabled=true
    

}
function sideO(e){
    uside='o'
    iside='x'
    document.getElementById('sideo').style.border='solid yellow 2px'
    document.getElementById('sideo').disabled=true
    document.getElementById('sidex').disabled=true
}

function makeMove(e){
    let place=e.target.name
    if (uside=='x'){
        if (field[place]==' '){
            field[place]=uside
            counter=field.filter(item => item === iside).length
            checkWin()
            drawTest=field.filter(item => item==' ')
            if (drawTest.length!==0){
                    easyI()
            }
            painter()
            checkWin()
            if (winner==='user'){
                win(uside)
            } else if (winner==='cpu'){
                win(iside)
            } else if (winner==='draw'){
                win(draw)
            }
        }
    } else if (uside=='o') {
        if (field[place]==' '){
            field[place]=uside
            counter=field.filter(item => item === iside).length
            checkWin()
            drawTest=field.filter(item => item==' ')
            if (drawTest.length!==0){
            
                hardcoreI()
                if (field.filter(item => item === iside).length===counter){
                    NotSoEasyI()
                }
            }
            painter()
            checkWin()
            if (winner==='user'){
                win(uside)
            } else if (winner==='cpu'){
                win(iside)
            } else if (winner==='draw'){
                win(draw)
            }
        }
    }
}
    
function checkWin(){
    let check1=[]
    let check2=[]
    for (num=0;num<9;num++){
        if (field[num]!== ' '){
            if (field[num]== uside){
                check1.push(num)
            } else {check2.push(num)}
        }
    }
    check1=check1.join('')
    check2=check2.join('')
    for (item of winCombos){
        let count=0
        for (number of item){
            if (check1.includes(String(number))){
                count++
            } 
            if (count==3){
                winner='user'
                return winner;
            } 
            }
        }
    for (item of winCombos){
        let count=0
        for (number of item){
            if (check2.includes(String(number))){
                count++
            } 
            if (count==3){
                winner='cpu'
                return winner;
            } 
        }
    }
    drawTest=field.filter(item => item==' ')
    if (drawTest.length==0){
        winner='draw'
        return winner
    }
}

function win (side) {
    let buttons=document.getElementsByClassName('field')
    for (button of  buttons){
        button.disabled=true
    }
    if (side==uside){
        document.getElementsByTagName('h2')[0].innerHTML='You Win!'
    }
    else if (side==iside) {
        document.getElementsByTagName('h2')[0].innerHTML='You Lose!'
    }
    else {
        document.getElementsByTagName('h2')[0].innerHTML='Draw!'
    }
    document.getElementById('restart').style.visibility='visible'
}

function easyI(){
    let variants=[]
    for (num=0;num<9;num++){
        if (field[num]==' '){
            variants.push(num)
        }
    }
    let random=Math.round(Math.random()*(variants.length-1))
    field[variants[random]]=iside
}

function NotSoEasyI(){
    let variants=[]
    if (field[4]==' '){
        field[4]=iside
    } else if (field[0]==' '){
        field[0]=iside
    } else if (field[2]==' '){
        field[2]=iside
    } else if (field[6]==' '){
        field[6]=iside
    } else if (field[8]==' '){
        field[8]=iside
    } 
   
}


function restart(){
    location.reload()
}

function painter(){
    for (box in field){
        if(field[box]=='x'){
            document.getElementById(`box${box}`).innerHTML=`<img class="xoimage" src="/Week6/Day5/Tic_tac_toe/letter-x_4553028.png">`
        } else if (field[box]=='o'){
            document.getElementById(`box${box}`).innerHTML=`<img class="xoimage" src="/Week6/Day5/Tic_tac_toe/opera_220602.png">`
        } else{
            document.getElementById(`box${box}`).textContent=field[box]
        }
    }
}
function hardcoreI(){
        let fieldArr = [];
        for (let item in field) {
            if (field[item] == ' ') {
                fieldArr.push(Number(item));
            }}
        for (let item of fieldArr){
            field[item] = iside
            if (checkWin()=='cpu'){

                winner='nobody';
                break
                } else {field[item]=' '
                        winner='nobody'}
            }
        if (field.filter(item => item === iside).length==counter){
            for (let userItem of fieldArr){
            field[userItem] = uside
                if (checkWin()=='user'){
                    field[userItem]=iside
                    winner='nobody';
                    break
            }   else {field[userItem]=' '
                        winner='nobody'}    
    }
}
        }
    
