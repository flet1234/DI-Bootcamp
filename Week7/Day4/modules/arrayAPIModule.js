async function getArray(url) {
    try {
    res = await fetch(url)
    if (res.status != 200){
        throw new Error(`Status: ${res.status}`)
    } 
    else{
        data = await res.json()
        return data
    } 
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getArray
}