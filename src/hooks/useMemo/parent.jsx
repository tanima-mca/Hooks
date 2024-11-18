import React, { useState } from "react";
import Children from './children';

export default function Parent() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100)
  const increment = () => {
    setCount(count + 1);
  };


  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Button</button>
      <Children value={data} />
      
    </>
  )
}
