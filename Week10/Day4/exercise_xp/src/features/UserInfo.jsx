import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

const UserInfo = (props) => {
    const users = useSelector((state)=>state.userReducer.users)
    const status = useSelector((state)=>state.userReducer.status)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    if(status==='pending'){
        return (
            <>
            <h2>Users:</h2>
            <h2>Loading...</h2>
        </>
        )
    }
    if(status==='rejected'){
        return (
            <>
            <h2>Users:</h2>
            <h2>Something wrong with fetch</h2>
        </>
        )
    }
    return(
        <>
            <h2>Users:</h2>
            {users.map(item=>{
                return (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                    </ul>
                )
            })}
        </>
        )
    }


export default UserInfo