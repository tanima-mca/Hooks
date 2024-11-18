import React from 'react'
import { useState } from 'react';

export default function Functioalupdates() {
    const[name,setNames]=useState("");
    const[age,setAge]=useState("");
    const[submit,setSubmit]=useState({name:"",age:""});

    const handleNameChange=(e)=>{
        const name=e.target.value;
        setNames(name);
       
   }
   const handleAgeChange=(e)=>{
       const age=e.target.value;
       setAge(age);

   }


   const handleSubmit=(e)=>{
       e.preventDefault();
       setSubmit({name,age});
   
   }


  return (
    <>
     <input type='text' id='name' placeholder="entername..." value={name} onChange={handleNameChange}></input>
        <input type='text' id='age' placeholder="enterage..."  value={age} onChange={handleAgeChange}></input>
        <button onClick={handleSubmit}>submit</button>
        {submit.name && (
                    <p>Name: {submit.name}</p>
                )}
        {submit.age && (
            <p>Age:{submit.age}</p>
        )}
    </>
  )
}
