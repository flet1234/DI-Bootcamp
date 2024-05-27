import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },3000)
    },[])

    return <h1>Something went Wrong! You will be redirected to a home page...</h1>
}

export default Error