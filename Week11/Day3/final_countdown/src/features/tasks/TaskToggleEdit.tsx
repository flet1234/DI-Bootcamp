import { Item } from "../../model/ListItem"
import { useToggleEdit, useEdit} from "./hooks"

interface TaskToggleEditProps{
    id: string,
    newTask?:string,
    task: Item
}

const TaskToggleEdit = ({id,newTask,task}:TaskToggleEditProps) => {

    const toggleEdit = useToggleEdit()
    const edit = useEdit()
    
    console.log(task);
    console.log(newTask);
    
    

    return (
        <>
            {task.edit ? <button onClick={edit(newTask)}>Update</button> : <button>Edit</button> }
        </>
    )
}

export default TaskToggleEdit