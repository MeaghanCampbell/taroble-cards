import { CURRENT_READING } from './actions'
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case CURRENT_READING:
            return {
                ...state,
                currentReading: action.currentReading,
            }

            default:
                return state
    }
}

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}