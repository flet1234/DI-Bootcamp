import { useState } from "react"
const Phone = (props) => {
    const [info,setInfo] = useState({brand:'Samsung',model:'Galaxy S20',color:'black',year:2020})
    return <p>My phone is {info.brand} it is a {info.color} {info.model} from {info.year}</p>
}

export default Phone