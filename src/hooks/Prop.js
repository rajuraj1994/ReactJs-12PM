import React from 'react'

const Prop = (props) => {   // props is an object
  const { language, technology } = props    // object destructuring

  // language and technology are props
  // const language = props.language
  // const technology = props.technology

  return (
    <>
      <h2>
        It is {language} class. It is used for {technology}
      </h2>
    </>
  )
}

export default Prop
