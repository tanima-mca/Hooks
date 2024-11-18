import React from 'react'
import Notecontext from './context'

export default function Parent(props) {

    const state={
        name:"John",
        add:"New Delhi",
        phnno:"333344444"
    }


  return (
    <>
      <Notecontext.Provider value={state}>{props.children}</Notecontext.Provider>
    </>
  )
}
