import {useNavigate} from "react-router-dom"
import githublogo from '../assets/githublogo.jpg'
import { useEffect,useState } from "react"



const Contact = () => {

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
                        <button onClick={()=>toggleFade('Projects')}>Projects</button>
                        <button className="activeLink">Contact</button>
                    </div>
                </div>
                <div id="navMain">
                    <h1>You want to leave a message?</h1>
                    <h4>I will answer you as soon as i can, i promise!</h4>
                </div>
            </nav>
            <div className="container">
                <h1>Contact me: </h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Your name: </label><input type="text" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your email: </label><input type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your message: </label><textarea name="message" id="message"></textarea>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
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

export default Contact