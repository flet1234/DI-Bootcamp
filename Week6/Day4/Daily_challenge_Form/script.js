


document.getElementById('submit').addEventListener('click',showJson)

function showJson(e){
    e.preventDefault()
    let user = {name:document.getElementById('name').value,
                lastname: document.getElementById('lastName').value}
    let jsonUser=JSON.stringify(user)
    let newDiv = `<div>${jsonUser}</div>`
    document.getElementById('root').innerHTML= document.getElementById('root').innerHTML.concat(newDiv)
}
