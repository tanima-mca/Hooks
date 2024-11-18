import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function Pageapi1() {
    const [data, setData] = useState();
    console.log(data);
    
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setData(data.products);
            });
    }, []);


  return (
    <>
    {data?.map((item)=>(
        <Link to={`/pageapi2/${item.id}`}> <h5>{item.title}</h5></Link>
    ))}
      
    </>
  )
}
