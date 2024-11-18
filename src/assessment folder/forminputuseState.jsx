import React from 'react'
import { useState } from 'react'

export default function ForminputuseState() {
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
