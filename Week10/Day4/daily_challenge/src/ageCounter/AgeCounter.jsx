import { useDispatch, useSelector } from "react-redux"
import { ageDown,ageUp } from "./ageSlice"
import '../App.css'
import logo from '../assets/react.svg'


const AgeCounter = (props) => {
    const age = useSelector((state)=>state.ageReducer.age)
    const status = useSelector((state)=>state.ageReducer.status)

    const dispatch=useDispatch()


    if(status==='pending'){
        return <img className="logo" src={logo} alt="loading"/>
    }

    return (
    <>
        <h1>Age : {age}</h1>
        <button onClick={()=>dispatch(ageUp())}>+</button><button onClick={()=>dispatch(ageDown())}>-</button>
    </>
)
}

export default AgeCounter