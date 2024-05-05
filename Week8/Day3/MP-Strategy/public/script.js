
const d = document
let color

async function startMatch(e) {
    d.getElementById('startButton').style.display='none'
    d.getElementById('colorPick').style.display='flex'
}

async function pickColor(e) {
    e.preventDefault()
    color = d.forms[0].color.value
    d.getElementById('colorPick').style.display='none'
    
}