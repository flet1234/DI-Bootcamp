import { useDispatch } from "react-redux"
import { REMOVE_TASK } from "./tasksReduser"

const TaskRemove = (props) => {

    const dispatch = useDispatch()
    
    const removeTask = () => {
        dispatch({type:REMOVE_TASK, id:props.id})
    }

    return (
        <button onClick={()=>removeTask()}>DELETE</button>
    )
}

export default TaskRemove