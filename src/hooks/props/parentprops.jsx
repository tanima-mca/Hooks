import React from 'react'
import Children from './childprops'

export default function Parentprops() {

    let b=12

  return (
    <>
      <Children value={b} />
    </>
  )
}
