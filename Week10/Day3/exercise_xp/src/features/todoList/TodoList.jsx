import { useSelector, useDispatch } from "react-redux"
import { addTask,deleteTask,toggleTask,editTask,toggleEdit} from "./todoSlice"
import { useRef,useState } from "react"
import '../../App.css'

const TodoList = (prop) => {

    const days = useSelector((state)=> state.todoReducer.days)
    const dispatch=useDispatch()
    const inputRef = useRef()
    const editRef = useRef()
    const [date,setDate] = useState()

    const filter=(date)=>{
        const filtered = days.filter(item=>item.day === date)
              if(filtered.length){
            return filtered[0].tasks.map(item=>{
                return (
                    <div key={item.id}>
                        {item.edit ? <input defaultValue={inputRef.current.value} onChange={()=>dispatch(editTask({date, id:item.id, task:editRef.current.value}))} type="text" ref={editRef}/> : <h5 className={item.complete ? 'completed' : ''} onClick={()=>dispatch(toggleTask({date,id:item.id}))}>Task : {item.task}</h5>}
                        <p>To change completion click on a task</p>
                        <button onClick={()=>dispatch(toggleEdit({date, id:item.id}))}>{item.edit ? 'Update' : 'Edit'}</button>
                        <button onClick={()=>dispatch(deleteTask({date, id:item.id}))}>Delete</button>
                    </div>
                        )
        })} else {
            return <p>No tasks for this date </p>
        }
        }

    return <>
        <h1>Your tasks:</h1>
        <p>Click to toggle completion</p>
        <h3>Select date: </h3><input onChange={(e)=>setDate(e.target.value)} type="date"/>
        {filter(date)}
        <input ref={inputRef} type="text" placeholder="Enter task..." /><button onClick={()=>dispatch(addTask({task:inputRef.current.value, date}))}>Add Task</button>
    </>
}

export default TodoList