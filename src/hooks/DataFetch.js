import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
          <div className='col-md-3' key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default DataFetch
