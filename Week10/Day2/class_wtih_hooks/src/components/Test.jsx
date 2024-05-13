import { connect, useSelector, useDispatch} from "react-redux"
import { takeInput } from "../redux/actions"
import { useRef } from "react"



const Test = (props) => {

    const text = useSelector((state)=> state.makeText.text)
    const dispatch = useDispatch()

    return <div><h3>{text}</h3>
            <input onChange={(e)=>dispatch(takeInput(e.target.value))}/></div>
}

// const mapStateToProps = (state) => {
//     return {
//         text:state.makeText.text
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         takeInput:(e)=> dispatch({type:'takeinput', payload:e.target.value})
//     }
// }



export default Test