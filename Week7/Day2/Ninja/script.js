let url ='https://api.giphy.com/v1/gifs/search?limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
async function getGif(e) {
    e.preventDefault()
    let category=e.target.category.value
    console.log(category);
    let newUrl=url.concat(`&q=${category}`)
    console.log(newUrl);
    res=await fetch(newUrl)
    if (res.status!=200){
        throw new Error(`Status: ${res.status}`)
    }
    else{
        data= await res.json()
        data.data.forEach(element => {
            console.log(element);
            document.getElementById('root').innerHTML+=`<div><img src="${element.images.original.url}">`
        });
        document.getElementById('deleteAll').style.visibility='visible'
    }
}

function deleteAll(e) {
    let parent=document.getElementById('root')
    while (parent.firstChild){
       parent.removeChild(parent.firstChild)
    }
    document.getElementById('deleteAll').style.visibility='hidden'
}
