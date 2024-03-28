// color pallete section 
let clearButton=document.createElement('button')
let clearText=document.createTextNode('Clear')
clearButton.appendChild(clearText)
clearButton.addEventListener('click',clearPallete)
clearButton.style.width='95%'
clearButton.style.height='10%'
clearButton.style.fontSize='16px'
clearButton.style.borderRadius='10px'
clearButton.style.marginTop='4px'
document.getElementById('colorpallete').appendChild(clearButton)

for (item=0;item<21;item++){
    let newDiv=document.createElement('div')
    newDiv.style.backgroundColor=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    newDiv.style.width='30%'
    newDiv.style.height='12%'
    newDiv.style.marginLeft='2px'
    newDiv.style.marginRight='2px'
    newDiv.classList.add('colors')
    newDiv.addEventListener('click',pickColor)
    document.getElementById('colorpallete').appendChild(newDiv)

}

document.getElementById('colorpallete').lastElementChild.style.backgroundColor='white'

function clearPallete(){
    for (item of document.getElementsByClassName('greed')){
        item.style.backgroundColor='white'
    }

}
let pickedColor
function pickColor(e){
    pickedColor=e.target.style.backgroundColor
    return pickedColor;
}



// grid section

for (item=0;item<2500;item++){
    let newDiv=document.createElement('div')
    newDiv.style.border='gray solid 1px'
    newDiv.style.width='2%'
    newDiv.style.height='2%'
    newDiv.classList.add('greed')
    newDiv.addEventListener('mousemove',takeColors)
    newDiv.addEventListener('mousedown',mouseDown)
    newDiv.addEventListener('mouseup',mouseUp)
    newDiv.addEventListener('click',takeColor)
    document.getElementById('grid').appendChild(newDiv)}

document.body.addEventListener('mousedown',mouseDown)
document.body.addEventListener('mouseup',mouseUp)

let msDown=false

function mouseDown(e){
    e.preventDefault()
    return msDown=true
}

function mouseUp(e){
    e.preventDefault()
    return msDown=false
}

function takeColors(e){
    e.preventDefault()
    if(msDown){
    e.target.style.backgroundColor=pickedColor   
    }
}
function takeColor(e){
    e.preventDefault()
    e.target.style.backgroundColor=pickedColor   
}
