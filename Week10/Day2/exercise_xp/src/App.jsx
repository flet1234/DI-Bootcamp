import {useSelector , useDispatch} from 'react-redux'
import { adding, toggle, deleting, edit , toggleedit } from './redux/action'
import './App.css'
import { useRef } from 'react'

function App() {
  
  const tasks = useSelector((state)=> state.toDoList.tasks)
  const dispatch = useDispatch()
  const inputRef = useRef()

  return (
    <>
      <h1>TO DO LIST</h1>
      <input ref={inputRef} type="text" placeholder='Input a Task' /><button onClick={()=>dispatch(adding(inputRef.current.value))}>Add Task</button>
      <div>{tasks.map((item,i)=>{return (<ul key={i}>
        <li>Name : {item.task}</li>
        {item.complete ? <li>Complete : Yes</li> : <li>Complete : No </li>}
        <button onClick={()=>dispatch(toggle(item.id))}>Change completion</button>
        <button onClick={()=>dispatch(deleting(item.id))}>Delete</button>
        </ul>
      )
      })}</div>
    </>
  )
}

export default App
