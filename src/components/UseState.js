import React, { useState } from 'react'

const UseState = () => {
  const [inputBox, setInputBox] = useState("Salman");

const upDate = (e)=> {
    setInputBox(e.target.value);
}
    return (
    <div className='center'>
      <input type="text" placeholder='type your text here' onChange={upDate}/>{inputBox}
    </div>
  )
}

export default UseState;
