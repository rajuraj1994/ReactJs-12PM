import React from 'react'

const Prop = (props) => {
    const {language,technology} =props
    return (
        <>
            <h2> It is a {language} class.It is used for {technology}</h2>
        </>
    )
}

export default Prop
