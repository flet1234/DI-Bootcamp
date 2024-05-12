import { useRef, useState } from "react"

const TodoList = (props)=>{
    const [toDoList,setToDoList]=useState([])
    const addRef = useRef()
    const delRef = useRef()

    const addTask = (e) => {
        e.preventDefault()
        const newTask = {id:toDoList.length+1 ,task:addRef.current.value, completed:false}
        setToDoList([...toDoList, newTask])
        addRef.current.value=''
    }

    const delteTask = () => {
        let index = parseInt(delRef.current.value)
        setToDoList(toDoList.filter(item => item.id !== index))
        delRef.current.value=''
        
    }

    return (
    <div>
        <h1>To do list</h1>
        {toDoList.map((item) => {
            return (<ul key={item.id}>
                <li>ID : {item.id}</li>
                <li>TASK :{item.task}</li> 
                <li>State : {item.completed ? 'Done' : 'Not finished'}</li>
                </ul>)})}
        
        
        <form onSubmit={addTask}>
            <input ref={addRef} placeholder="Input task to create it"/>
            <button type="submit">Add</button>
        </form>
        <input ref={delRef} type="number" placeholder="Input id to delete task"/>
        <button onClick={delteTask}>Delete</button>
    </div>
)

}

export default TodoList