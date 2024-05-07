import React from "react";

class Child extends React.Component{
    constructor(){
        super()
    }

    componentWillUnmount(){
        alert('Unmounting right now!')
    }

    render(){
        return <h1>Hello World</h1>
    }
}

export default Child