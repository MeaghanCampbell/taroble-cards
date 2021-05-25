import { CURRENT_READING, CURRENT_PAGE, PREVIOUS_PAGE } from './actions'
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case CURRENT_READING:
            return {
                ...state,
                currentReading: action.currentReading,
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case PREVIOUS_PAGE:
            return {
                ...state,
                previousPage: action.previousPage,
            }

        default:
            return state
    }
}

export function useReadingReducer(initialState) {
    return useReducer(reducer, initialState);
}