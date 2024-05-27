import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import mainPhoto from '../assets/timedMainPhoto.jpg'
import '../App.css'

const MainPage = () => {
    const [fade, setFade] = useState(true)

    const navigate = useNavigate()
    
    const toggleFade = () =>{
        setFade(!fade)
        setTimeout(()=>{
            navigate('/About')
        },500)
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setFade(!fade)
        },10)
    },[])

    return (
        <>  
        <div className={`main_container ${fade ? 'fade-out' : 'fade-in' }`}>
            <div id="mainImageContainer">
                <img id="mainImage" src={mainPhoto} alt="photo" />
            </div>
            <h1>Welcome! My name is Maksim Gold</h1>
            <h2>I am a full-stuck developer, here you can check some information about me,
                 my projects and even contact me</h2>
            <button className="arrow-button" onClick={toggleFade}>Enter</button>
        </div>   
        </>
    )
}

export default MainPage