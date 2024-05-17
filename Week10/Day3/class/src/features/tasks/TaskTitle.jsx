import { useSelector } from "react-redux"


const TaskTitle = (props) => {
    const tasks = useSelector((state)=> state.tasksReducer.tasks)
    return   <h2>Number of Tasks = {tasks.length}</h2>
}

export default TaskTitle