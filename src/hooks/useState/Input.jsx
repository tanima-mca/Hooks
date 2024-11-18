import React, { useState } from 'react'

const Innput = () => {
    const[val,setVal]=useState();
    const[submit,setSubmit]=useState()

    const handleTextInput=(e)=>{
        setVal(e.target.value);
    }

    const handleSubmit=()=>{
        setSubmit(val);
    }
    
  return (
    <>
    
    <input type="text" id='text' onChange={handleTextInput}></input>
    <button onClick={handleSubmit}>submit</button>
    <p>{submit}</p> 
      
    </>
  )
}

export default Innput

