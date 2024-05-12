import { ThemeContext} from "./ThemeContext";
import { useContext } from "react";
import '../App.css'

const Example = (props) => {
    const {theme} = useContext(ThemeContext)
    
    return (<section className={`${theme}section`}>
        <h1 className={`${theme}h1`}>Hello world</h1>
        <p className={`${theme}p`}>some text</p>
        </section>)
}

export default Example