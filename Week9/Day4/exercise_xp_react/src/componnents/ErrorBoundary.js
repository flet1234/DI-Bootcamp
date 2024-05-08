import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state = {
            hasError:false,
        }
    }

    componentDidCatch = (error,errorInfo)=>{
        this.setState({hasError:true,errorInfo})
    }

    render(){
        console.log(this.state.hasError);
        if(this.state.hasError===true){
            console.log('pidr');
            
            return  (<div>
                        Ha
                    </div> )
                    
        }
        return this.props.children
    }
}   


export default ErrorBoundary