import { useRef, useState } from "react"

const TodoList = (props)=>{
    const [toDoList,setToDoList]=useState([])
    const addRef = useRef()
    const delRef = useRef()
    const [originalList,setOriginalList]=useState([])
    const [counter,setCounter] = useState(1)

    const addTask = (e) => {
        e.preventDefault()
        const newTask = {id:counter ,task:addRef.current.value, completed:false, edit:false}
        setToDoList([...toDoList, newTask])
        setCounter(counter+1)
        addRef.current.value=''
    }

    const delteTask = (itemId) => {
        let index = parseInt(itemId)
        setToDoList(toDoList.filter(item => item.id !== itemId))
    }

    const handleEdit = (itemId,e) => {
        e.preventDefault()
        let index =toDoList.findIndex(item => itemId === item.id )
        setToDoList([...toDoList], toDoList[index].edit=!toDoList[index].edit)
    }

    const handleUpdate = (itemId,e) => {
        e.preventDefault()
        let index =toDoList.findIndex(item => itemId === item.id )
        setToDoList([...toDoList], toDoList[index].edit=!toDoList[index].edit)
    }

    const handleChange = (itemId,e) =>{
        let index =toDoList.findIndex(item => itemId === item.id )
       
        setToDoList([...toDoList], toDoList[index].task=e.target.value)
    }

    const changeCompletion = (itemId) => {
        let index =toDoList.findIndex(item => itemId === item.id )
       
        setToDoList([...toDoList], toDoList[index].completed=!toDoList[index].completed)
    }

    const handleCheck = (itemId,e) => {
        let index = toDoList.findIndex(item => itemId === item.id )
        e.target.checked ? setToDoList([...toDoList], toDoList[index].completed=true) : setToDoList([...toDoList], toDoList[index].completed=false)
    }

    const filterComplete = () =>{
        const onlyCompleted = toDoList.filter(item => item.completed === true)
        setToDoList(onlyCompleted)
        setOriginalList([...toDoList])

    }

    const showAll = () => {
    
        setToDoList([...originalList])
    }

    return (
    <div>
        <h1>To do list</h1>
        <form >
        {toDoList.map((item) => {
            return (<ul key={item.id}>
                <li>ID : {item.id}</li>
                {item.edit ? <input onChange={(e)=>handleChange(item.id,e)} value={item.task}/> : <li>TASK :{item.task}</li>}
                {item.edit ? <><input type="checkbox" onChange={(e)=>handleCheck(item.id,e)}/><label>Done?</label></> : <li onClick={()=>changeCompletion(item.id)}>State : <span style={{textDecoration:'underline'}}>{item.completed ? 'Done' : 'Not finished'}</span></li>} 
                {item.edit ? <button onClick={(e)=>handleUpdate(item.id,e)}>Update</button> : <button onClick={(e)=>handleEdit(item.id,e)}>Edit</button> }
                <button onClick={()=>delteTask(item.id)}>Delete</button>
               
                </ul>)})}</form>
        
        
        <form onSubmit={addTask}>
            <input ref={addRef} placeholder="Input task to create it"/>
            <button type="submit">Add</button>
        </form>
        <button onClick={filterComplete}>Show only complete</button>
        <button onClick={showAll}>Show all</button>
    </div>
)

}

export default TodoList