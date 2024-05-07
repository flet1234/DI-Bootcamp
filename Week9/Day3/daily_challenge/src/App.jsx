import { useState } from 'react'

function App() {

  const [selectedDestination, setSelectedDestination] = useState('')
  const handleDestinationChange = (e) =>{
    setSelectedDestination(e.target.value)
  }
  const [isChecked,setIsChecked] = useState(false)
  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  const [isChecked2,setIsChecked2] = useState(false)
  const handleCheckbox2 = () => {
    setIsChecked2(!isChecked2)
  }
  const [isChecked3,setIsChecked3] = useState(false)
  const handleCheckbox3 = () => {
    setIsChecked3(!isChecked3)
  }
  const [firstname,setFirstname] = useState('')
  const handleFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const [lastname,setLastname] = useState('')
  const handleLastname = (e) => {
    setLastname(e.target.value)
  }
  const [age,setAge] = useState('')
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const [selectedRadio,setSelectedRadio] = useState('')
  const handleRadio = (e) => {
    setSelectedRadio(e.target.value)
  }
  
  return (
    <div>
      <form action=''>
        <h1>Sample Form</h1>
        <input placeholder='First Name' name='firstname' value={firstname} onChange={handleFirstname}/>
        <br></br>
        <input placeholder='Last Name' name='lastname' value={lastname} onChange={handleLastname}/>
        <br></br>
        <input placeholder='Age' name='age' value={age} onChange={handleAge}/>
        <br></br>
        <input name='sex' type='radio' value='Male' checked={selectedRadio==='Male'} onChange={handleRadio}/><label>Male</label>
        <br></br>
        <input name='sex' type='radio' value='Female' checked={selectedRadio==='Female'} onChange={handleRadio}/><label>Female</label>
        <br></br>
        <div>
          <h3>Select your destination</h3>
          <select name='destination' value={selectedDestination} onChange={handleDestinationChange}>
            <option value=''>--Please Choose a destination--</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
        <br></br>
        <div>
          <h3>Dietary restrictions:</h3>
          <input type="checkbox" checked={isChecked} onChange={handleCheckbox} name="nutsFree" value={isChecked ? 'Yes' : 'No'}/><label >Nuts Free</label>
          <br />
          <input type="checkbox" checked={isChecked2} onChange={handleCheckbox2} name="lactoseFree" value={isChecked2 ? 'Yes' : 'No'}/><label >Lactose Free</label>
          <br />
          <input type="checkbox" checked={isChecked3} onChange={handleCheckbox3} name="VeganFree" value={isChecked3 ? 'Yes' : 'No'}/><label >Vegan Free</label>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <br /><hr /><br />
      <section>
        <h1>Entered information:</h1>
        <br />
        <p>Your name: {firstname} {lastname}</p>
        <br />
        <p>Your age: {age}</p>
        <br />
        <p>Your gender: {selectedRadio}</p>
        <br />
        <p>Your destination: {selectedDestination}</p>
        <br />
        <p>Your dietary restrictions: </p>
        <ul>
          <li>**Nuts free: {isChecked ? 'Yes' : 'No'}</li>
          <li>**Lactose free: {isChecked2 ? 'Yes' : 'No'}</li>
          <li>**Vegan meal: {isChecked3 ? 'Yes' : 'No'}</li>
        </ul>
      </section>
    </div>
  )
}

export default App
