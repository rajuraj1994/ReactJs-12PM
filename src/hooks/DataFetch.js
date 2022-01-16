import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Item from './Item'

const DataFetch = () => {
    const [posts,setPost] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res =>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => console.log(err))

    },[])

    return (
        <>
            <div className='row'>
                {posts.map((item)=>(
                    <Item data={item} key={item.id}/>
                ))}
            </div>
        </>
    )
}

export default DataFetch
