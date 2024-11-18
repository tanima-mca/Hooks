import React from 'react'
import { useState } from 'react';

export default function Toggleboolean() {
  const [checked,setChecked]=useState();


  const handleChecked=(e)=>{
      setChecked(e.target.checked)
  }

        
  return (
    <>
        <label>
        <input type='checkbox' id='' checked={checked} onChange={handleChecked}/>I liked this
      </label>
      <p>you {checked ? "liked" : "didn't like "} this</p>
    </>
  )
}
