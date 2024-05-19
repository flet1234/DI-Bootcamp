import { useState, useCallback, useMemo} from 'react'
import Todo from './Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  
  const expensiveCalculations = (num) => {
    for(let i = 0; i<10000000; i++){
      num++
    }
    return num
  }

  // const calculation = expensiveCalculations(0)
  const calculation = useMemo(()=>{
    expensiveCalculations(0)
  },[count])
  
  console.log(calculation);

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  // const addTask = () => {
  //   setTodos(todos => [...todos], 'new-task')
  // }

  const addTask = useCallback(() => {
    setTodos(todos => [...todos], 'new-task')
  },[todos])

  return (
    <>
     <div>
      <h2>{count}</h2>
      <button onClick={increment}> + </button>
      <Todo todos={todos} addTask={addTask} calculation={calculation}/>
     </div>
    </>
  )
}

export default App
