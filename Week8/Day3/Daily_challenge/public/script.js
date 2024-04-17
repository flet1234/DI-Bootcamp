
async function register(e) {
    e.preventDefault()
    let formDom = document.forms[0]
    let first_name = formDom.first_name.value
    let last_name = formDom.last_name.value
    let email = formDom.email.value
    let username = formDom.username.value
    let password = formDom.password.value
    let data = {first_name,last_name,password,email,username}
    let url = 'http://localhost:3000/register'
    let options = {
        method : 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    res = await fetch (url,options)
    if (res.status!=200){
        throw new Error(`Status: ${res.status}`)
    }   
    else{
        result = await res.json()
        console.log(result);
        document.getElementById('root').innerHTML =`<p>${result.msg}</p>`
    }
}

