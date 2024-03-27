let story
let newButton
let butText

document.forms[0].addEventListener('submit',getValues)

function getValues(){
    event.preventDefault()   
    noun=document.getElementById('noun').value
    adjective=document.getElementById('adjective').value
    verb=document.getElementById('verb').value
    place=document.getElementById('place').value
    person=document.getElementById('person').value 
    let story1=`${noun} in ${place} wanted to ${verb} a ${adjective} car , but ${person}, ${verb}ed it already.`
    let story2=`One day ${person} want to begin ${adjective} business, he decided to ${verb} small ${place} from ${noun}`
    let story3=`${place} not for everyone, for exmaple ${adjective} ${noun} doesnt love it, he prefer to ${verb} with ${person}`
    let story4=`We dicided to ${verb} you, that ${person} is not very ${adjective}, he knew that ${noun} will be in ${place}`
    let rdNum=Math.random()*101
    if (rdNum<25 && rdNum>0){
            story=story2}
    else if (rdNum<50 && rdNum>25){
            story=story3}
    else if (rdNum<75 && rdNum>50){
            story=story4}
    else {story=story1}
    if (!isNaN(noun)==false && !isNaN(adjective)==false && !isNaN(verb)==false && !isNaN(place)==false && !isNaN(person)==false){
        document.getElementById('story').textContent=story
        if (document.querySelectorAll('button').length==1){
            newButton=document.createElement('button')
            butText=document.createTextNode('Shufle')
            newButton.appendChild(butText)
            newButton.addEventListener('click',shufle)
            document.getElementsByTagName('p')[0].appendChild(newButton)
            }
        } else {alert('Invalid input, use only letters and brain')}
        
   
}
function shufle(){
    story1=`${noun} in ${place} wanted to ${verb} a ${adjective} car , but ${person}, ${verb}ed it already.`
    story2=`One day ${person} want to begin ${adjective} business, he decided to ${verb} small ${place} from ${noun}`
    story3=`${place} not for everyone, for exmaple ${adjective} ${noun} doesnt love it, he prefer to ${verb} with ${person}`
    story4=`We dicided to ${verb} you, that ${person} is not very ${adjective}, he knew that ${noun} will be in ${place}`
    story;
    switch (document.getElementById('story').textContent) {
    case story1:
        document.getElementById('story').textContent=story2;
        break;
    case story2:
        document.getElementById('story').textContent=story3;
        break;
    case story3:
        document.getElementById('story').textContent=story4;
        break
    default:
        document.getElementById('story').textContent=story1;
    }
}