import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const ComC = () => {
  const context = useContext(GlobalContext)

  return (
    <>
      <h2>The javascript library we are learning is {context}</h2>
    </>
  )
}

export default ComC
