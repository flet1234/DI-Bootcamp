import { useState,useEffect } from "react"

const Color = (props) => {
    const [favoriteColor,setFavoriteColor]=useState('red')
    useEffect(()=>{
        alert('useEffect Reached')
        setFavoriteColor('yellow')
      },[])
    return <>
    <p>My favorite color is {favoriteColor}</p>
            <button onClick={()=>setFavoriteColor('blue')}>Change color</button>
    </>
    
    
}

export default Color