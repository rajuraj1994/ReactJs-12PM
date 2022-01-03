import React, { useState, useEffect } from 'react' // useState for product data  // useEffect for fetching data
import axios from 'axios' // axios is a library that makes http requests
import Product from './Product'

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
        {products.map((product) => (    // .map is a method that takes in an array and returns an array of JSX  // product is a variable that represents each item in the array of products // product is an object that represents each product in the array of products 
          <Product  // Product is a component that we want to render
              key={product.id}      // key is a property that tells React that this element should be unique  // product.id is the id of the product
              title={product.title} // title is a prop  // product.title is the title of the product
              image={product.image} // image is a prop  // product.image is the image of the product
              price={product.price} // price is a prop  // product.price is the price of the product
            /> 
        ))}
      </div>
    </>
  )
}

export default ProductFetch
