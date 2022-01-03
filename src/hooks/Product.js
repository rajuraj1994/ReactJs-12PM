import React from 'react'

const Product = ({ title, image, price }) => {  // title, image, price are props
  
  // title, image, price are variables that represent the props

  // const {title, image, price} = props
  // const title = props.title    // title is a prop
  // const image = props.image    // image is a prop
  // const price = props.price    // price is a prop

  return (
    <div>
      <h1>{title}</h1>
      <img height={100} src={image} alt={title} />
      <p>$ {price}</p>
    </div>
  )
}

export default Product
