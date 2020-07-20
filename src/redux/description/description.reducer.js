import descriptionActionTypes from './description.types';

const INITIAL_STATE = {
    hidden: true,
    itemToPresent: []
}

const descriptionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case descriptionActionTypes.TOGGLE_DESCRIPTION_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
         case descriptionActionTypes.ADD_ITEM:
            return {
                ...state,
                itemToPresent: action.payload
            }
        default:
            return state;
    }
}

export default descriptionReducer;