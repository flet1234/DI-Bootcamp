let url ='https://api.sunrise-sunset.org/json?'
async function showResult(e) {
    e.preventDefault()
    let count=1
    let root=document.getElementById('root')
    let result1 = async()=>{
        let lat1 = e.target.latitude1.value
        let lon1 = e.target.longitude1.value
        let data1
        newUrl1=`${url}lat=${lat1}&lng=${lon1}`
        let res = await fetch(newUrl1)
        if (res.status!=200){
            throw new Error(`Status1: ${res.status}`)
        }
        else{
            data1= await res.json()
            return data1.results
        }
    }
    
    let result2 = async()=>{
        let lat2 = e.target.latitude2.value
        let lon2 = e.target.longitude2.value
        let data2
        newUrl2=`${url}lat=${lat2}&lng=${lon2}`
        let res = await fetch(newUrl2)
        if (res.status!=200){
            throw new Error(`Status2: ${res.status}`)
        }
        else{
            data2= await res.json()
            return data2.results
        }
    }

    Promise.all([result1(),result2()])
    .then(data=>{
        data.forEach(result=>{
            root.innerHTML+=`<h2>City${count}</h2>`
            count++
            for (key in result){
                root.innerHTML+=`<div>${key} - ${result[key]}</div>`
            } 
        })
    }) 
    .catch(err=>{
        console.log(err);
    })
}  