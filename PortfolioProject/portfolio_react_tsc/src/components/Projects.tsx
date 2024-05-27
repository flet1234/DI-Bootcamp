import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import githublogo from '../assets/githublogo.jpg'


const Projects = () => {

    const [fade, setFade] = useState(true)

    const navigate = useNavigate()
    
    const toggleFade = (value:string) =>{
        setFade(!fade)
        setTimeout(()=>{
            navigate(`/${value}`)
        },500)
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setFade(!fade)
        },10)
    },[])

    return (
        <div className={`${fade ? 'fade-out' : 'fade-in' }`}>
            <nav>
                <div id="navLinks">
                    <div id="Home">
                        <button onClick={()=>toggleFade('')}>Home</button>
                    </div>
                    <div id="Links">
                        <button onClick={()=>toggleFade('About')}>About</button>
                        <button className="activeLink">Projects</button>
                        <button onClick={()=>toggleFade('Contact')}>Contact</button>
                    </div>
                </div>
                <div id="navMain">
                    <h1>Check out my latest projects...</h1>
                    <h4>There is some of my works and info about it, that i want to show you</h4>
                </div>
            </nav>
            <h1>PROJECT</h1>
            <footer>
                <a href="https://github.com/flet1234" target="_blank" rel="noopener noreferrer">
                    <img src={githublogo} alt="GitHub Logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">My Linkedin</a>
                <h6>&copy; {new Date().getFullYear()}</h6>
            </footer>
        </div>
    )
}

export default Projects