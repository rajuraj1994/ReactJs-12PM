import React from 'react'
import { useSelector } from 'react-redux'

const GameA = () => {
    const value= useSelector(state => state.game)
    return (
        <>
           <h2> The gamename is {value.gamename}</h2> 
           <h2> The player name is {value.playername}</h2>
        </>
    )
}

export default GameA
