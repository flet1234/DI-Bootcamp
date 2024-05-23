import Navlinks from "./Navlinks"
import githublogo from '../assets/githublogo.jpg'
import '../App.css'

const Footer = () => {
    return (
        <>
            <footer>
                <Navlinks name={<img src={githublogo}/>} address="https://github.com/flet1234"/>
                <Navlinks name='About' address="#"/>
                <Navlinks name='About' address="#"/>
            </footer>
        </>
    )
}

export default Footer