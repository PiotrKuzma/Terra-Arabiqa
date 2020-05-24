const INITIAL_STATE = {
    appUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
        return{
        ...state,
        appUser: action.payload
        }
        default:
        return state
    }
}

export default userReducer;