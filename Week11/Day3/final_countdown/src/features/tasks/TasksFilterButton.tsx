import { EnumActiveState } from "./slice"
import { useSetFilter } from "./hooks"
import { memo } from "react"

const TasksFilterButton = () => {
    const setFilter = useSetFilter()

   

    return (
        <div>
            {
                Object.keys(EnumActiveState)
                .filter((key) => isNaN(Number(key)))
                .map((key)=> (
                    <button key={key} onClick={()=> setFilter(EnumActiveState[key as keyof typeof EnumActiveState])}>{key}</button>
                ))
            }
        </div>
    )
}

const MemoizedTaskFilterButton = memo(TasksFilterButton)
export default MemoizedTaskFilterButton