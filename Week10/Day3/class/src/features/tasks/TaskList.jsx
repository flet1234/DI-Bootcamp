import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { REMOVE_TASK ,COMPLETE_TASK } from "./tasksReduser";
import './task.css'
import TaskTitle from "./TaskTitle";
import TaskInput from "./TaskInput";
import TaskRemove from "./TaskRemove";

const TaskList = (props) => {
    const [ filter, setFilter] = useState()
    const tasks = useSelector((state)=>state.tasksReducer.tasks)
    const dispatch = useDispatch()
    console.log(tasks);
    
    const taskCompleted = (id) => {
        dispatch({type:COMPLETE_TASK, id})
    }


    const filterTasks = tasks.filter(task => {
        if(filter === 'completed') return task.completed
        else if (filter === 'active') return !task.completed
        return task
    })

    return (
        <>
            <TaskTitle/>
            <TaskInput/>
            <div>
                <button onClick={()=>setFilter('all')}>All</button>
                <button onClick={()=>setFilter('completed')}>Completed</button>
                <button onClick={()=>setFilter('active')}>Active</button>
            </div>
            {filterTasks.map(task=> {
                return (
                    <div key={task.id}>
                      <span onClick={()=>taskCompleted(task.id)} className={task.completed ? 'completed' : ''}>{task.task}</span>
                      <TaskRemove id={task.id}/>
                    </div>
                    
                )
            })}
        </>
    )
}

export default TaskList