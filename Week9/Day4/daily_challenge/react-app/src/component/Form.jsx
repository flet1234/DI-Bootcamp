import { useState } from "react"

const Form = () => {
    const [data,setData]=useState('')
    const [response,setResponse]=useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(data);
        const res = await fetch('http://localhost:5000/api/world',{
            method:'POST',
            headers:{
                'Content-type':'Application/json'
            },
            body:JSON.stringify({data})
        })
        const newData = await res.text()
        setResponse(newData)
        console.log(data);

    }

    return  <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setData(e.target.value)} placeholder="Type something..."/>
                <input type="submit" value="Submit"/><br />
                {response}
            </form>
    
}

export default Form