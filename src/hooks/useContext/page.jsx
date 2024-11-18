import React, { useContext } from 'react'
import Notecontext from './context'

export default function Page() {
    const data=useContext(Notecontext);
  return (
    <>
      <h1>{data.phnno}</h1>
    </>
  )
}
