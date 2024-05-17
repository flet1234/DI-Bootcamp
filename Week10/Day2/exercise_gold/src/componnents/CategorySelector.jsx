import { useState } from "react"
import TaskInput from "./TaskInput";

const CategorySelector = (props) => {
    
    const [selectValue, setSelectValue] = useState()
    console.log(selectValue);
    return (
        <>
        <select value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
            <option value=''>--Choose category--</option>
            <option value='home'>Home</option>
            <option value='work'>Work</option>
            <option value='health'>Health</option>
        </select>
        <TaskInput select={selectValue}/>
        </>
    )
}

export default CategorySelector