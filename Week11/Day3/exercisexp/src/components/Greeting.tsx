import { useState, useEffect} from "react"


interface GreetingInterface{
    name:string
}

interface UserJson {
    id:number,
    name:string,
    username:string,
    email:string,
    address:{
        street: string,
      suite: string,
      city: string,
      zipcode: number | string,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: number | string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}




const Greeting = ({name}:GreetingInterface) => {
     
    const [count,setCount]=useState<number>(0)
    const [users,setUsers]=useState<UserJson[]>([])

    const getUsers = async() =>{
        let res =  await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        setUsers(data)
        
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
    <>
        <h3>Hello {name}</h3>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count => count +1)}> + </button>
        <button onClick={()=>setCount(count => count -1)}> - </button>
        <h2>Usernames:</h2>
        {users.map((item)=>{
            return (
                <>
                    <li key={item.id}>{item.name} {item.address.street}</li>
                </>
            )
        })}
    </>
    )
}

export default Greeting