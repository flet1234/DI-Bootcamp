import Navlinks from "./Navlinks";
import { useState } from "react";


const Navbar = () => {

    const homeTitle = <h1>Hello Pidr</h1>
    const aboutTitle = <h1>This is about me</h1>
    const projectTitle = <h1>Projects of a god</h1>
    const contactTitle = <h1>Contact me plz</h1>


    const [navTitle,setNavTitle]=useState(homeTitle)
  
    return (
        <nav>
            <div id="navLinks">
                <div id="Home">
                    <Navlinks onClick={()=>setNavTitle(homeTitle)}  name='Home' address="#"/>
                </div>
                <div id="Links">
                    <Navlinks onClick={()=>setNavTitle(aboutTitle)} name='About' address="#"/>
                    <Navlinks onClick={()=>setNavTitle(projectTitle)} name='Projects' address="#"/>
                    <Navlinks onClick={()=>setNavTitle(contactTitle)} name='Contact' address="#"/>
                </div>
            </div>
            <div id="navMain">
                <h1>{navTitle}</h1>
            </div>
        </nav>
    )
}

export default Navbar