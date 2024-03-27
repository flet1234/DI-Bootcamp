
let newTr
let newTd
let newCell
function insertRow(){
    newTr=document.createElement('tr')
    newTd=document.createElement('td')
    newCell=document.createTextNode('new Cell')
    newTd.appendChild(newCell)
    newTr.appendChild(newTd)
    document.getElementById('sampleTable').appendChild(newTr)
}

document.getElementById('jsstyle').addEventListener('click', clicked)
document.getElementById('jsstyle').addEventListener('mouseover', mOver)
document.getElementById('jsstyle').addEventListener('mouseout', mOut)

function clicked(e){
    e.target.style.background='blue'
}
function mOver(e){
    e.target.style.background='red'
}
function mOut(e){
    e.target.style.background='green'
}

document.getElementsByTagName('div')[0].addEventListener('click', clickedDiv)
document.getElementById('jsstyle1').addEventListener('click', clicked1)
document.getElementById('jsstyle1').addEventListener('mouseover', mOver1)
document.getElementById('jsstyle1').addEventListener('mouseout', mOut1)

function clickedDiv(e){
    e.target.style.background='yellow'
}
function clicked1(e){
    e.target.style.background='blue'
    e.stopPropagation()
}
function mOver1(e){
    e.target.style.background='red'
}
function mOut1(e){
    e.target.style.background='green'
}
let userName
let userLName
let timer
function getvalue(){
    userName=document.getElementsByName('fname')[0].value
    userLName=document.getElementsByName('lname')[0].value
    console.log(userLName,userName)
} 

let bannerTime=10

function banner(){
    document.getElementById('banner').style.visibility='visible'
    timer=setInterval(timeChange,1000)
    bannerTimeChange()
}

function timeChange(){
    bannerTime--;
    document.getElementById('banner').textContent='SALES END IN '+bannerTime+' seconds'
    if (bannerTime==0){
       clearInterval(timer) 
    }
    
}

function bannerTimeChange(){
    document.getElementById('banner').textContent='SALES END IN '+bannerTime+' seconds'
    timer
}

setTimeout(banner,5000)



