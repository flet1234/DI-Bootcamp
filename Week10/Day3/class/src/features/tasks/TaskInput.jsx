import { useRef } from "react"
import { ADD_TASK } from "./tasksReduser"
import { useDispatch } from "react-redux"

const TaskInput = (prop) => {

    const dispatch = useDispatch()

    const addRef = useRef('')

    const addTask = () => {
        if(addRef.current.value.trim()==='') return;
        dispatch({type:ADD_TASK,payload:addRef.current.value})
        addRef.current.value = '';
    }
    return (
        <div>
            <input ref={addRef} placeholder="add new task..."/>
            <button onClick={()=> addTask()}>Add Task</button>
        </div>
    )
}

export default TaskInput