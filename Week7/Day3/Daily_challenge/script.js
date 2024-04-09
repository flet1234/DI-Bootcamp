let getCurrencies=async()=>{
    try {
         let url = 'https://v6.exchangerate-api.com/v6/068615fedeeaa390233355f4/codes'
    res = await fetch(url)
    if(res.status!==200){
        throw new Error(`Status: ${res.status}`)
    }
    data = await res.json()
    arrayOfCurr=data.supported_codes
    console.log(arrayOfCurr);
    } catch (error) {
        console.log(error);
    }
   
}

getCurrencies()



async function convert(e) {
    e.preventDefault()
}