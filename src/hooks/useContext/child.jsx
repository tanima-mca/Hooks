import React, { useContext } from 'react'
import Notecontext from './context'

export default function Child() {
    const data=useContext(Notecontext);
    console.log(data)

  return (
    <>
      <h1>{data.name}</h1>
    </>
  )
}
