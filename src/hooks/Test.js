import React,{useState,useEffect} from 'react'

const Test = () => {
    const[count,setCount] = useState(0)
    const[value,setValue] = useState(1)
    return (
        <>
        <center>
            <h2>{count}</h2>
            <button className='btn btn-success'>Button One</button>
            <hr/>
            <h2>{value}</h2>
            <button className='btn btn-warning'>Button Two</button>
        </center>
            
        </>
    )
}

export default Test
