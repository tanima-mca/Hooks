import React, { useContext } from 'react'
import Notecontext from './context'

export default function Child2() {
  const data=useContext(Notecontext);
  

  return (
    <>
      <h1>{data.add}</h1>
    </>
  )
}
