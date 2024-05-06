import {useState} from 'react'
import Garaje from './Garaje'



const Car = (props) =>{
    const [color,setColor]=useState('white')
    return <>
    <p>This car is {color} {props.model}</p>
            <Garaje size={'small'}/>
    </>
}

export default Car