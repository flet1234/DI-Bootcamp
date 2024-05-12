import React, { useRef,useState } from "react";
import "../App.css";

function CharacterCounter() {
 const [counter,setCounter]=useState(0)

  const inputRef = useRef(0);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCounter(textLength)
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {counter}</p>
    </div>
  );
}


export default CharacterCounter;