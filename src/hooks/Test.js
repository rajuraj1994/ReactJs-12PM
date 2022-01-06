import React, { useState, useEffect } from 'react'

const Test = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)

  //   useEffect(() => {
  //     alert('this is a useEffect')
  //   }, [count])   // when count state change

  useEffect(() => {
    alert('this is a one-time useEffect')
  }, [])

  return (
    <>
      <center>
        <h2>{count}</h2>
        <button className='btn btn-success' onClick={() => setCount(count + 1)}>
          Button One
        </button>
        <hr />
        <h2>{value}</h2>
        <button className='btn btn-warning' onClick={() => setValue(count - 1)}>
          Button Two
        </button>
      </center>
    </>
  )
}

export default Test
