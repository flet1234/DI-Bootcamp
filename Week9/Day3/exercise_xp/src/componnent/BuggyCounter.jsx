import React from "react";


class BuggyCounter extends React.Component{
    constructor(){
        super()
        this.state = {
            counter:0,
        }
    }

    handleClick = () => {
        this.setState( {...this.state.counter++} )
    }

    render(){
        if(this.state.counter>5){
            throw new Error('Something bad happens...')
            
        }
        return <button onClick={this.handleClick}>{this.state.counter}</button>
    }
}

export default BuggyCounter