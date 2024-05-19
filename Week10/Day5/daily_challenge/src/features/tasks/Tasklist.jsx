import { addTask,deleteTask,toogleTask,editToggleTask,editTask,deleteCategory,editCategory} from "./taskSlice"
import { useDispatch } from "react-redux"
import { useEffect, useRef, useState} from "react"
import { useTaskFilter } from "./taskHooks"

const Tasklist = (props) => {
    const [category,setCategory]=useState()
    const [complete,setComplete]=useState('')
    const inputRef = useRef()
    const inputEditRef = useRef()
    const tasks = useTaskFilter(category,complete)
    const dispatch = useDispatch()



    const printTask = () => {
        console.log('render');
        return (
            <>{tasks.map(item=>{
                return (<div key={item.id}>
                    <h4>{item.category}</h4>
                    {item.edit ? <div>Edit task: <input onChange={(e)=>dispatch(editTask({id:item.id, task:e.target.value}))} defaultValue={item.task}/>
                    Edit category: <input ref={inputEditRef} defaultValue={item.category}/>
                    </div> : <p onClick={()=>dispatch(toogleTask(item.id))}>{item.task} is {item.complete ? 'Complete' : 'Not finished'}</p>}<br />
                    {item.edit ? <button onClick={()=>dispatch(editCategory({id: item.id, category:inputEditRef.current.value}))}>Update</button> : <button onClick={()=>dispatch(editToggleTask(item.id))}>Edit</button>}
                    <button onClick={()=>dispatch(deleteTask(item.id))}>Delete</button>
                </div>)
            })}</>
        )
    }

    return (
        <>
        <h1>Tasks:</h1>
        <select onChange={(e)=>setComplete(e.target.value)}>
            <option value="">All</option>
            <option value="1">Completed</option>
            <option value='0'>Not completed</option>
        </select>
        <input type="text" placeholder="input category" onChange={(e)=>setCategory(e.target.value)}/> <button onClick={()=>dispatch(deleteCategory(category))}>!Delete category!</button><br /> 
        <input ref={inputRef} type="text" placeholder="Input a task"/><button onClick={()=>dispatch(addTask({task:inputRef.current.value, category}))}>Add Task</button>
        {printTask()}
        </>
    )
}

export default Tasklist