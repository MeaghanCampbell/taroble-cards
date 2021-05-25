import React, { createContext, useContext } from "react";
import { useReadingReducer } from './reducers';

const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReadingReducer({
        currentReading: {},
        currentPage: 'loading',
        previousPage: 'home'
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext }