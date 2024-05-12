import { useContext } from "react"
import { AppContext } from "../App"
import Button2 from "./Button2"

const Button = (props) => {

    const {counter,action } = useContext(AppContext)
    return <>
    <button onClick={(e)=>{action(counter+1)}}>Add</button> <Button2/>
    </>
}

export default Button