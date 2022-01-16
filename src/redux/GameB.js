import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const GameB = () => {
    const [game, setGame] = useState('')
    const [player, setPlayer] = useState('')

    const dispatch = useDispatch()

    const changeGame = () => (
        dispatch({ type: 'CHANGE_GAME', payload: game })
    )

    const changePlayer= () =>(
        dispatch({type:'CHANGE_PLAYER_NAME',payload: player})
    )

    return (
        <>
            <h2>Form</h2>
            <input
                type="text"
                id="game"
                placeholder='type game name here ...'
                onChange={(e) => setGame(e.target.value)}
            /> &nbsp; &nbsp;
            <button
                className='btn btn-warning'
                onClick={changeGame}
            >
                Change Game
            </button>
            <br />
            <br/>
            <input
                type="text"
                placeholder='type player name'
                onChange={(e)=> setPlayer(e.target.value)}
            />
            &nbsp;&nbsp;
            <button
                className='btn btn-success'
                onClick={changePlayer}
            >
                Change Player
            </button>

        </>
    )
}

export default GameB
