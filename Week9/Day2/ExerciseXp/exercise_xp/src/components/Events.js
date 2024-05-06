import { useState } from "react"
import { useEffect } from "react"

const Events = (props) => {
    const clickMe = (e) => {
        alert('I was clicked')
    }
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            alert(`The enter key was pressed, your input is: ${e.target.value}`)
        }
    }
    let [isToggleOn,setIsToggleOn] = useState(true)
    return <>
    <button onClick={clickMe}>Try</button>
            <input onKeyDown={handleKeyDown}></input>
            <button onClick={()=>setIsToggleOn(!isToggleOn)}>{isToggleOn ? 'On':'Off'}</button>
    </>
    
}

export default Events