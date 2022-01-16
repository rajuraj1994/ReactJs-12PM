import React from 'react'
import GameA from './GameA'
import GameB from './GameB'
import ItemBtn from './ItemBtn'
import TestNav from './TestNav'

const MainPage = () => {
    return (
        <center>
            <TestNav/>
            <ItemBtn/>
            <GameA/>
            <GameB/>
        </center>
    )
}

export default MainPage
