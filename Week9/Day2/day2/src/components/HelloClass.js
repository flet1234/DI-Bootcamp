import React from 'react'
import Hello from './Hello'

class HelloClass extends React.Component {
    constructor(){
        super()
        this.state = {
            name:'John',
            title:'welcome to js class'
        }
    }

    changeName=()=>{
        this.setState({name:'Dan', email:'jjj@email.com', title:'welcome to React'})
        
    }

    handleChange = (e) => {
        this.setState({name:e.target.value})
    }

    render(){
        return (
            <>
                <h2>Hello, {this.state.name} from {this.props.title}</h2>
                <p>Email: {this.state.email}</p>
                <input onChange={this.handleChange}/>
                <button onClick={this.changeName}>Click Me!</button>
                <Hello title={this.state.title}/>
            </>
        )
    }
}

export default HelloClass