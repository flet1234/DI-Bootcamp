import { Item } from "../../model/ListItem"
import TaskRemove from "./TaskRemove"
import TaskToggleEdit from "./TaskToggleEdit"
import { useCheckTask } from "./hooks"
import './tasks.css'
import { useRef } from "react"


type TaskItemProps = {
    task: Item;
}

const Taskitem = ({task}: TaskItemProps) => {

    const check = useCheckTask()
    const inputRef=useRef()
    const handleClick = () => {
        check(task.id)
    }

    return (
        <>
         <>
            {task.edit ? <><input ref={inputRef} defaultValue={task.item} type="text" /> <TaskToggleEdit task={task} newTask={inputRef.current?.value || ''} id={task.id}/></> : 
            <><span className={task.checked ? "completed" : ''} onClick={handleClick}>{task.item}</span>
              <TaskToggleEdit  task={task} id={task.id}/> </>}
           
            <TaskRemove id={task.id}/>
         </>
         
        </>
       
    )
}

export default Taskitem