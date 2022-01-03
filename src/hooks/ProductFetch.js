import React, { useState, useEffect } from 'react' // useState for product data  // useEffect for fetching data
import axios from 'axios' // axios is a library that makes http requests

const ProductFetch = () => {
  // useState for product data
  const [products, setProducts] = React.useState([]) // setProducts is a function that takes in an array of products and sets the state to that array

  // useEffect for fetching data
  React.useEffect(() => {
    // Make a GET request for a products with a given URL
    axios
      .get('https://fakestoreapi.com/products') // the url we want to get data from
      // handle success
      .then((response) => {
        console.log(response.data) // response.data is the data we get back from the server
        setProducts(response.data) // setProducts is a function that takes in an array of products and sets the state to that array
      })
      // handle error
      .catch((error) => console.log(error)) // console.log the error
  }, [])
  // [] is an array that tells the useEffect to only run once
  // if we pass in an array with a dependency, it will only run the effect when the dependency changes
  // if we pass in an empty array, it will run the effect every time the component renders

  return (
    // return the JSX
    // JSX is a syntax for writing HTML in Javascript
    <>
      <div className='row'> {/* .row is a bootstrap class */}
        {products.map((product) => (    // .map is a method that takes in an array and returns an array of JSX
          <div className='col-md-3' key={product.id}>   {/* .col-md-3 is a bootstrap class */}  {/* key is a React property that allows us to uniquely identify each element in an array */}
            <h1>{product.title}</h1>    {/* .title is a property that is on the product object */}
            <img src={product.image} alt={product.title} />  {/* .image is a property that is on the product object */}
            <p>{product.price}</p>   {/* .price is a property that is on the product object */} 
            <p>{product.body}</p>   {/* .body is a property that is on the product object */}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductFetch
