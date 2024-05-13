import { useState , useReducer, useRef} from 'react'
import Counter from './components/counter'
import './App.css'


export const initialState = {
  count:0,
  tasks:[]
}

/** Action */
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADDTASK = 'addtask'

export const reducer = (state, action) => {
  // if(action.type === INCREMENT){
  //   return {...state, count: state.count+1}
  // } else if(action.type === DECREMENT){
  //   return {...state, count: state.count-1}
  // }
  // return state
  
  switch (action.type) {
    case INCREMENT:
      return {...state, count:state.count + action.payload }
    case DECREMENT:
      return  {...state, count:state.count - action.payload }
    case ADDTASK:
      const newTasks = [...state.tasks]
      newTasks.push({name:action.payload})
      return  {...state, tasks:newTasks}
    default:
      return state
  }

}


function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef=useRef()

  return (
    <>
        <h1>useState</h1>
        <button onClick={() => setCount((count) => count + 1)}>+
        </button>
        count is {count}
        <button onClick={() => setCount((count) => count - 1)}>-
        </button>

        <h1>useReducer</h1>
        <button onClick={()=> dispatch({type:INCREMENT, payload : 10})}>+</button>
        count is {state.count}
        <button onClick={()=> dispatch({type:DECREMENT, payload : 5})}>-</button> <br />
        <input ref={inputRef} placeholder='Input a task'/> <button onClick={()=> dispatch({type:ADDTASK, payload:inputRef.current.value})}>Add Task</button> <br />
        {state.tasks.map((item,i) => {
          return <li key={i}>{item.name}</li>
        })}
        <Counter />
    </>
  )
}

export default App
