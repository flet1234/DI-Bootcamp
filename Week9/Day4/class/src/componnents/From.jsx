import { useState } from "react"

const Form = (props) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [num,setNum]=useState()
    const [yesno,setYesno]=useState(false)

    const [inputs,setInputs]=useState({})

    const handleInputs = (e) => {
        const {value, checked, type, name} = e.target

        const inputValue = type === 'checkbox' ? checked : value
        setInputs({...inputs, [name]:inputValue})
      
    }


    const handleSubmit= (e) =>{
        e.preventDefault()
        console.log(inputs);
        setInputs(null)

    
        // send to server
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={(e)=>handleInputs(e)} placeholder="Name..." /><br />
                <input name="email"  onChange={(e)=>handleInputs(e)} type="email" placeholder="Email..."/><br />
                <select name="num" onChange={(e)=>handleInputs(e)}>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select><br />
                Yes/No <input checked={inputs?.yesno} name="yesno" onChange={(e)=>handleInputs(e)} type="checkbox"/>
                Diet <input name="diet" onChange={(e)=>handleInputs(e)} type="checkbox"/>
                Gluten <input name="gluten" onChange={(e)=>handleInputs(e)} type="checkbox"/> <br />
                Male<input type="radio" value={'Male'} name="radio" onChange={(e)=>handleInputs(e)}/>
                Female<input type="radio" value={'Female'} name="radio" onChange={(e)=>handleInputs(e)}/> <br />
                <textarea name="text" onChange={(e)=>handleInputs(e)}></textarea><br />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}
export default Form