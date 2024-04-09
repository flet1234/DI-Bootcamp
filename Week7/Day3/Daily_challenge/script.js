let root1=document.forms[0].currency1
let root2=document.forms[0].currency2

let getCurrencies=async()=>{
    try {
        let url = 'https://v6.exchangerate-api.com/v6/068615fedeeaa390233355f4/codes'
    res = await fetch(url)
    if(res.status!==200){
        throw new Error(`Status: ${res.status}`)
    }
    data = await res.json()
    arrayOfCurr=data.supported_codes
    arrayOfCurr.forEach(element => {
        root1.innerHTML+=`<option>${element}</option>`
        root2.innerHTML+=`<option>${element}</option>`
    })
    } catch (error) {
        console.log(error);
    }
   
}

getCurrencies()

async function convert(e) {
    e.preventDefault()
    let url ='https://v6.exchangerate-api.com/v6/068615fedeeaa390233355f4/pair' 
    let cur1=root1.value.slice(0,3)
    let cur2=root2.value.slice(0,3)
    let ammount = document.forms[0].amount.value
    let newUrl=`${url}/${cur1}/${cur2}/${ammount}`
    try {
        let res = await fetch(newUrl)
        if (res.status!==200){
            throw new Error(`Status: ${res.status}`)
        }
        else{
            let data = await res.json()
            result=data.conversion_result
            if (result!==undefined){
                document.getElementById('result').innerHTML=`Result: ${result}`
            }
            
        }
        
    } catch (error) {
        console.log(error);
    }
}

function swap(e) {
    let cur1=root1.value
    let cur2=root2.value
    root1.value=cur2
    root2.value=cur1
    convert(e)
}