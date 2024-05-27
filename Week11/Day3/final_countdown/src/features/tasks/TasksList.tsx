import Taskitem from "./TaskItem"
import { useTasks } from "./hooks"
import { nanoid } from "@reduxjs/toolkit"


const TasksList = () => {

    const tasks = useTasks()
    return (
        <>
           {tasks.map((task)=> (
            <Taskitem key={nanoid()} task={task}/>
           ))}
        </>
        
    )
}

export default TasksList