// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
// -->
let url ='https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
async function randomGif(e) {
    e.preventDefault()
    let tag=e.target.category.value
    let newUrl=url.concat(`&tag=${tag}`)
    res=await fetch(newUrl)
    if (res.status!=200){
        throw new Error(`Status: ${res.status}`)
    }
    else{
        data= await res.json()
        let image=data.data.images.original
        document.getElementById('root').innerHTML+=`<div><img src="${image.url}">\n
        <button onclick="deleteButton(event)" id="deleteOne">Delete gif</button></div>`
        document.getElementById('deleteAll').style.visibility='visible'
    }
}

function deleteButton(e) {
    e.target.parentElement.remove()
}

function deleteAll(e) {
    let parent=document.getElementById('root')
    while (parent.firstChild){
       parent.removeChild(parent.firstChild)
    }
    document.getElementById('deleteAll').style.visibility='hidden'
}


