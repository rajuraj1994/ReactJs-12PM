import React from 'react'
import { Hello, Hi } from './Hello'
import './test.css'
const Test = () => {
    return (
        <>
            <div className="contain">
                <p>this is a component which contain external css</p>
            </div>
            <Hello/>
            <Hi/>
        </>
    )
}

export default Test
