import descriptionActionTypes from './description.types';

export const ToggleDescriptionHidden = () => ({
    type: descriptionActionTypes.TOGGLE_DESCRIPTION_HIDDEN

})

export const addItemToDescriptionArray = item => ({
    type: descriptionActionTypes.ADD_ITEM,
    payload: item
})