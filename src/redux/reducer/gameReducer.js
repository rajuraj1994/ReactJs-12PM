const initialData = {
    gamename:'football',
    playername:'messi'
}

const gameReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'CHANGE_GAME':
            return{
                ...state,
                gamename:action.payload
            }
        case 'CHANGE_PLAYER_NAME' :
            return{
                ...state,
                playername:action.payload
            }

        default:
            return state
    }
}

export default gameReducer