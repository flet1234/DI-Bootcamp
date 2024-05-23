import { ReactNode } from "react"

interface CountProps{
    // count : number
    children: ReactNode
    setCount: React.Dispatch<React.SetStateAction<number>>
}


const Counter =({children, setCount}: CountProps)=>{



    return (
        <>
            <h2>Counter</h2>
            {children}
            <button onClick={()=>setCount(count=>count+1)}> + </button>
            <button onClick={()=>setCount(count=>count-1)}> - </button>
        </>
    )
}

export default Counter