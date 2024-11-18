import React from 'react'
import Notecontext from '../context';
import { useState,useEffect } from 'react';


export default function Parent(props) {
    const [output, setOutput] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setOutput(data.products);
            });
    }, []);


  return (
    <>
      <Notecontext.Provider value={output}>{props.children}</Notecontext.Provider>
    </>
  )
}
