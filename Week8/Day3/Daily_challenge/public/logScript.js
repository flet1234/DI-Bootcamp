const login = async(e)=>{
    e.preventDefault()
    let formDom = document.forms[0]
    let username = formDom.username.value
    let password = formDom.password.value
    let data = {username,password}
    let url = 'http://localhost:3000/login'
    let options = {
        method :'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }
    res = await fetch(url,options)
    if(res.status != 200){
        throw new Error(`Status: ${res.status}`)
    }
    else{
        result = await res.json()
        console.log(result);
        document.getElementById('root').innerHTML=`<p>${result.msg}</p>`
    }
}