async function getInfo(e) {
    try { 
    let load=document.getElementById('load')
    let root=document.getElementById('info')
    root.style.display='none'
    load.style.display='block'
    let url='https://www.swapi.tech/api/people'
    let random=Math.floor(Math.random()*84)
    let newUrl=`${url}/${random}`
    let res= await fetch(newUrl)
    if (res.status!==200){
        throw new Error(`Status :${res.status}`)
    }
    else{
        let data=await res.json()
        let result=data.result.properties
        let name=result.name
        let height=result.height
        let gender=result.gender
        let bithYear=result.birth_year
        let planetUrl=result.homeworld
        let planetRes= await fetch(planetUrl)
        let planet
        if (planetRes.status!==200){
            throw new Error(`Status :${planetRes.status}`)
        }
        else{
            let planetData=await planetRes.json()
            planet=planetData.result.properties.name
        }
        load.style.display='none'
        root.style.display='block'
        root.innerHTML=`<h2>${name}</h2>\n<p>Height: ${height}</p>\n
        <p>Gender: ${gender}</p>\n<p>Year of birth: ${bithYear}</p>\n
        <p>Homeworld :${planet}</p>`
    }
    } catch (error) {
        console.log(error);
    } 
}