import TasksTitle from "./TasksTitle"
import TasksInput from "./TasksInput"
import TasksFilterButton from "./TasksFilterButton"
import TasksList from "./TasksList"

import { useTasks } from "./hooks"

const Tasks = () => {

    const tasks=useTasks()

    return (
        <>
            <h2>Tasks </h2>
            <TasksTitle taskscount={tasks.length}/>
            <TasksInput/>
            <TasksFilterButton/>
            <TasksList/>
        </>
    )
}

export default Tasks