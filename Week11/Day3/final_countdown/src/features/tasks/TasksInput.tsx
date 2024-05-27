import { useRef, memo } from "react"
import { useAddTask } from "./hooks"

const TasksInput = () => {
    console.log('TaskInput rendered');
    

    const inputRef = useRef<HTMLInputElement>(null)
    const addTaskHook = useAddTask()

    const addTask = () => {
        const task: string = inputRef.current?.value.trim() || ''
        if(task === '') return
        addTaskHook(task)
        inputRef.current!.value = ''
    }

    return (
        <>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={addTask}>Add Task</button>
            </div>
        </>
    )
}

const MemoizedTaskInput = memo(TasksInput)
export default MemoizedTaskInput