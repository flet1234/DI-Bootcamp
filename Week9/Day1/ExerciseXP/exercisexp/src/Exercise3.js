import React from "react";
import './Exercise.css'

class Exercise extends React.Component{
    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return  <>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para">This is a paragraph</p>
                <a>This is a link</a>
                <form>this is a form</form>
                <image>this is an image</image>
                <list>this is a list</list>
                </>
    }
}

export default Exercise