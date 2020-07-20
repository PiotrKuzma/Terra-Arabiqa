import { createSelector } from 'reselect';

const selectDescription = state => state.description;

export const selectDescriptionHidden = createSelector(
    [selectDescription],
    (description) => description.hidden
)

export const selectItemToDisplay = createSelector(
    [selectDescription],
    (description) => description.itemToPresent
)