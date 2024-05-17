import { useSelector, useDispatch } from "react-redux"
import { getUsers, adduser, adduserPrepare } from "./usersSlice"
import { useEffect, useRef } from "react"
import './users.css'




const Users = (props) => {
    const users =useSelector((state)=>
        state.usersSlice.users)
    const status =useSelector((state)=>
        state.usersSlice.status)
    const dispatch = useDispatch()
    const userNameRef = useRef()

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    if(status === 'loading') return <h2>Loading...</h2>
    if(status === 'failed') return <h2>Something wrong...</h2>
    return (<>
            <h3> Users :</h3>
            <div>
                <input ref={userNameRef} type="text" />
                <button onClick={()=>dispatch(adduserPrepare(userNameRef.current?.value))}>Add user</button>
            </div>
            <>{users.map(item => {
                return <div className="hero" key={item.id}>{item.name}</div>
            })}</>
    </>)
}

export default Users