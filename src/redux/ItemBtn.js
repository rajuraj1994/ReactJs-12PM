import React from 'react'
import { useDispatch } from 'react-redux'

const ItemBtn = () => {
    const dispatch = useDispatch()

    const addItem=()=>(
        dispatch({type:'ADD_ITEM'})
    )

    const removeItem=()=>(
        dispatch({type:'REMOVE_ITEM'})
    )

    return (
        <>
            <button
                className='btn btn-primary'
                onClick={addItem}
            >
                Add To Cart
            </button>
            <br /><br />
            <button
                className='btn btn-danger'
                onClick={removeItem}
            >
                Remove From Cart
            </button>
        </>
    )
}

export default ItemBtn
