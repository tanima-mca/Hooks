import React, { useReducer, useState, useEffect } from 'react';

const initialState = {
  name: '',
  email: '',
  password: ''
};

const reducerFn = (state, action) => {
  if (action.type==="FULL_NAME") {
      return { ...state, name: action.payload };
  }else if(action.type==="EMAIL") {
    return { ...state, email: action.payload };
  } else if(action.type==="PASSWORD") {
    return { ...state, password: action.payload };
  }else{
    return state
  }
};

export default function FormUseReducer() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('submittedData');
    if (data) {
      try {
        setSubmittedData(JSON.parse(data));
      } catch (error) {
        console.error('Failed to parse submitted data from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('submittedData', JSON.stringify(submittedData));
  }, [submittedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionText = `${state.name} ${state.email} ${state.password}`;
    setSubmittedData([...submittedData, submissionText]);
  };

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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {submittedData.map((data, index) => (
          <div 
            key={index} 
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              width: '200px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
             <p><strong>Submission {index + 1}</strong></p> 
            <p>{data}</p>
          </div>
        ))}
      </div>
    </>
  );
}
