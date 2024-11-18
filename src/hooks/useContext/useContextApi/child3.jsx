import React from 'react'
import { useContext } from 'react'
import Notecontext from '../context';

export default function Child3() {
    const data = useContext(Notecontext);

  return (
    <>
       {data.map((item) => (
                <p key={item.id}><strong>Category:</strong>:{item.title}</p>
            ))}
    </>
  )
}
