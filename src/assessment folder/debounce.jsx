import React, { useState, useEffect } from 'react';

export default function Debounce() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState(inputValue);
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setOutputValue(inputValue);
    }, 1000); 

    
    return () => clearTimeout(timer);
  }, [inputValue]);


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} placeholder='enter your name....' onChange={handleChange} />
      <p>Your Name is: {outputValue}</p>
    </>
  );
}


