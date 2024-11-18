import React from 'react'
import { useState, useReducer } from 'react'


const initialState = {
    name: '',
    email: '',
    password: ''
};

const reducerFn = (state, action) => {
    if (action.type === "FULL_NAME") {
        return { ...state, name: action.payload };
    } else if (action.type === "EMAIL") {
        return { ...state, email: action.payload };
    } else if (action.type === "PASSWORD") {
        return { ...state, password: action.payload };
    }else if (action.type==="RESET") {
        return initialState;
    } else {
        return state
    }
};

export default function FormsubmituseReducer() {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    const [submittedData, setSubmittedData] = useState([]);
    


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, { ...state }]);
        dispatch({type:"RESET"})
        

    };
    console.log(state,"ddddd");

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => dispatch({ type: 'FULL_NAME', payload: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => dispatch({ type: 'PASSWORD', payload: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h3>Submitted Data:</h3>
      <div>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Password:</strong> {data.password}</p>
            <hr />
          </div>
        ))}
      </div>
        </>
    )
}
