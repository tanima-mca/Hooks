import React, { useReducer } from 'react'


const initialstate = {
  name: "", submit_txt: ""
};

const inputReducer = (state, action) => {
  if (action.type === "show_text") {
    return { ...state, name: action.payload };
  } else if (action.type === "SUBMIT") {
    return { ...state, submit_txt: state.name };
  } else { return state }
}

const Useinput = () => {
  const [state, dispatch] = useReducer(inputReducer, initialstate)
  console.log(state);


  return (
    <>

      <input type='text' id='text' onChange={(e) => dispatch({ type: "show_text", payload: e.target.value })} />
      <button onClick={() => dispatch({ type: "SUBMIT" })}>submit</button>
      <h1>{state?.submit_txt}</h1>

    </>
  )
}

export default Useinput
