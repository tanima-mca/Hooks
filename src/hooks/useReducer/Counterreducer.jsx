import React from 'react'
import { useReducer } from 'react'



const counterReducer=(state,action)=>{
    if (action.type === "INCREMENT") {
        if (state?.count < 10) {
          return { count: state?.count + 1 };
        } else {
          return state;
        }
      } else if (action.type === "DECREMENT") {
        return { count: (state?.count || 0) - 1 };
      } else if (action.type === "RESET") {
        return { count: 0 };
      } else {
        return state;
      }
    };

const Counterreducer = () => {
    const initialstate={count:0}

    const[state ,dispatch]=useReducer(counterReducer ,initialstate)

  return (
    <div>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
      
    </div>
  )
}

export default Counterreducer



