
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Page2useParams() {
    let { id } = useParams()
    console.log(id)

    let [data, setData] = useState()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    
    return (
        <>
            <h5>{data?.title}</h5>

        </>
    )
}

  
