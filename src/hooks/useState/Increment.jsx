import React from 'react'
import { useState } from 'react'

const Increment = () => {
    const[increment,setIncrement]=useState(0)
    console.log(increment);

    const InCrement=()=>{
        if(increment<10){
            setIncrement(increment+1)
        }
        else{
            alert("not more than 10")
        }
       
    }

     const DeCrement=()=>{
        if(increment>0){
            setIncrement(increment-1)

        }
        else{
            alert("not less than 0")
        }
             }


    return(
    <>
    <h1>{increment}</h1>
    <button onClick={InCrement}>+</button>
    <button onClick={DeCrement}>-</button>
    </>
)

  
}

export default Increment
