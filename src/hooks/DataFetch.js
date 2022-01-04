import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

const DataFetch = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Make a GET request for a posts with a given URL
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // handle success
        console.log(response.data)
        setPosts(response.data)
      })
      // handle error
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <div className='row'>
        {posts.map((post) => (
          <Item data={post} key={post.id} />
        ))}
      </div>
    </>
  )
}

export default DataFetch
