import { useRef } from "react"
import Button from "./Button"
import {useDispatch, useSelector} from 'react-redux'
import { ADD_TASK } from "../features/taskReducer"


const TaskInput = (props) => {

const category = useSelector((state)=> state.taskReducer.category)
const dispatch = useDispatch()

const inputRef=useRef('')

const addTask = () =>{
    dispatch({type:ADD_TASK, task:inputRef.current.value, name:props.select})
    console.log(category);
}

    return (
        <div>
           <input ref={inputRef} placeholder="Input new task"/><Button title={'Add'} name={props.select} task={inputRef.current.value} function={addTask} /> 
        </div>
        
    )
}

export default TaskInput