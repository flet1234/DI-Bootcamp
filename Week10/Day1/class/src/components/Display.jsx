import ShowCounter from "./ShowCounter";
import { createContext, useState } from "react";

export const DisplayContext = createContext()


const Display = (props) => {
    const [title,setTitle]= useState('bla bla bla')
    return <div>
           <DisplayContext.Provider value={{title,setTitle}}>
             <ShowCounter />
           </DisplayContext.Provider>
           
            </div>
}

export default Display