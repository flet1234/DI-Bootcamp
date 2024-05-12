import { useContext } from "react"
import { AppContext } from "../App"

const Button2 = (props) => {
    const {counter,action} = useContext(AppContext)
    return <button onClick={()=>{action(counter-1)}}>-</button>
}

export default Button2