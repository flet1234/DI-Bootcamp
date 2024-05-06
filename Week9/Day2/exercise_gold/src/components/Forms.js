import {useState} from 'react'

const Forms = (props) =>{
    const [username,setUsername]=useState('')
    const [age,setAge]=useState(null)
    const [errormessage,setErrormessage]=useState('')
    const [textareaValue,setTextareaValue]=useState('lorem')
    const [selectedCar,setSelectedCar]=useState('Volvo')
    let header = ''
    if (username){
        header ='Hello '+username
    }
    if (age){
        header+=' '+age
    }
    const mySubmitHandler = (e) => {
        e.preventDefault()
        if(isNaN(age)){
            alert('Your age must be a number')
        } else{
           alert('You are submiting '+username) 
        }
        
    }
    const changeUsername = (e) =>{
        setUsername(e.target.value)
    }
    const changeAge = (e) =>{
        if(isNaN(e.target.value)){
            setErrormessage('Your age must be a number')
        } else{
            setAge(e.target.value)
            setErrormessage('')
        }
    }
    const handleCarChange = (e) => {
        setSelectedCar(e.target.value)
    }
        
    return  <form onSubmit={mySubmitHandler}>
            <h1>{header}</h1>
            <h5>Enter your name:</h5>
            <input onChange={changeUsername} name="name"></input>
            <h5>Enter your age:</h5>
            <input onChange={changeAge} name="age"></input><span>  {errormessage}</span>
            <div>
               <button type='submit'>Submit</button> 
            </div>
            <textarea></textarea>
            <h2>{selectedCar}</h2>
            <select value={selectedCar} onChange={handleCarChange}>
                <option value="Ford">Ford</option>
                <option value="Fiat">Fiat</option>
                <option value="Volvo">Volvo</option>
            </select>
            </form>
}

export default Forms