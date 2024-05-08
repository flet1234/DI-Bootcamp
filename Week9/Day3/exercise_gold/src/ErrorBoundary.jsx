import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state = {
            error:null,
            errorInfo:null,
            hasError:false
        }
    }

    occurError = () =>{
        this.setState({hasError:true})
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            error,
            errorInfo
        })
    }

    render(){
        if (this.state.hasError){
            return {error}, {errorInfo}
        }
        return this.props.children
    }
}

export default ErrorBoundary