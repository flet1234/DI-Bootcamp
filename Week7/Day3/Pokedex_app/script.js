let url = 'https://pokeapi.co/api/v2/pokemon?limit=10000'
let random
let info=document.getElementById('info')
let view=document.getElementById('view')
let load=document.getElementById('load')
let result

function getPoc(e){
    random=Math.floor(Math.random()*1303)
    load.style.display='flex'
    getPocemon(random)
}
async function getbase() {
        try {
        let res =  await fetch(url)
        if(res.status!==200){
            throw new Error(`Status: ${res.status}`)
        }
        else{
            let data = await res.json()
            result=data.results   
        }
   } catch (error) {
        console.log(error);
   }
}
async function getPocemon(id) {
        try {
            let rPoc=result[random]
            let pokemonUrl=rPoc.url
            let randomPoc = await fetch(pokemonUrl)
            if (randomPoc.status!==200){
                throw new Error(`Status: ${randomPoc.status}`)
            }
            else{
                let dataPoc = await randomPoc.json()
                let name = dataPoc.name.toUpperCase()
                let height = dataPoc.height
                let weight = dataPoc.weight
                let type = dataPoc.types[0].type.name
                let pic=dataPoc.sprites.front_default
                let id=dataPoc.id
                load.style.display='none'
                view.innerHTML=`<img width="120px" src="${pic}" alt="pokemon picture">`
                info.innerHTML=`<h2>${name}</h2>\n
                <p>Pokemon #: ${id}</p>\n
                <p>Height: ${height}</p>\n
                <p>Weight: ${weight}</p>\n
                <p>Type: ${type}</p>`
                
            }
   } catch (error) {
        console.log(error);
   }
}

function left(e) {
    load.style.display='flex'
    if (random==undefined){
        getPoc(e)
    }
    else{
        random--
        getPocemon(random) 
    }
}
function right(e) {
    load.style.display='flex'
    if (random==undefined){
        getPoc(e)
    }
    else{
        random++
        getPocemon(random) 
    }
    
}

getbase()