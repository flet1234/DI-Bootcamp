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
        return  (<>
                <h1 style={style_header}>This is a Header</h1>
                <p className="para">This is a paragraph</p>
                <a>This is a link</a>
                <form>
                  <input placeholder="this is a form"/><label>Heheh</label><br/>
                  <input type="submit" value={Submit}/>
                </form>
                <img src='' alt="this is an image"/>
                <ul>
                  <li>this is a list</li>
                </ul>
                </>
                )
    }
}

export default Exercise