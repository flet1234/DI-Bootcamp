import { useSelector, useDispatch } from "react-redux"
import { increment,decrement,reset,byNumber, incrementWithPrepare, increment1, delayIncrement, delayIncrementThunk} from "./counterSlice"
import { useRef } from "react"

const Counter = (props) => {
    const count = useSelector((state)=>state.counterReducer.count)
    const count1 = useSelector((state)=>state.counterReducer.count1)

    const dispatch = useDispatch()
    const inputRef = useRef()
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={()=>dispatch(increment())}> + </button>
            <button onClick={()=>dispatch(decrement())}> - </button>
            <button onClick={()=>dispatch(reset())}> RESET </button>
            <div>
                <input ref={inputRef} type="number" />
                <button onClick={()=>dispatch(byNumber(inputRef.current.value))}>Increment by number</button>
            </div>
            <div>
                <input type="number" />
                <button onClick={()=>dispatch(incrementWithPrepare(6,4))}>Increment with prepare</button>
            </div>
            <div>
                 <h2>COUNT1 = {count1} </h2>
                 <button onClick={()=>dispatch(increment1())}> + </button>
            </div>
            <div>
                 <h2>COUNT1 = {count1} </h2>
                 <button onClick={()=>dispatch(increment1())}> + </button>
            </div>
            <div>
                 <h2>Delay Increment</h2>
                 <button onClick={()=>dispatch(delayIncrementThunk())}> + </button>
            </div>
        </>
    )
}

export default Counter