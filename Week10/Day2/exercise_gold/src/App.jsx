import { useState } from 'react'
import './App.css'
import TaskTitle from './componnents/TaskTitle'
import TaskList from './componnents/TaskList'
import TaskInput from './componnents/TaskInput'
import CategorySelector from './componnents/CategorySelector'
function App() {

  return (
    <>
      <TaskTitle/>
      <CategorySelector/>
      <TaskList/>
    </>
  )
}

export default App
