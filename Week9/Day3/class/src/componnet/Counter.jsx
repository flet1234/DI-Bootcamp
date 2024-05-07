import { useState } from "react";
import Child from "./Child";

const Counter = (props) => {
    const [count,setCount]=useState(0)
    if(count>5){
        throw new Error('Crashed...!!!!')
    }
    return(
        <>
        <button onClick={()=>setCount(count+1)}> + </button>
        <p>{count}</p>
        </>
    )
}

export default Counter