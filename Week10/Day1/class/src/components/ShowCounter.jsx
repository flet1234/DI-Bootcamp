import { useContext } from "react"
import { AppContext } from "../App"
import { DisplayContext } from "./Display"
import ChangeInput from "./ChangeInput"

const ShowCounter = (props) => {
    const { counter, name } = useContext(AppContext)
    const {title} = useContext(DisplayContext)

    return <h1>{counter} {name} {title}
        <ChangeInput/>
        </h1>
}

export default ShowCounter