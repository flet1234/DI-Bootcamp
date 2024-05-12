import { useContext } from "react"
import { DisplayContext } from "./Display"

const ChangeInput=(props)=>{
    const {title,setTitle} = useContext(DisplayContext)

    return <input onChange={(e)=>setTitle(e.target.value)}/>
}

export default ChangeInput