import React, { createContext, useContext } from "react";
import { useReadingReducer } from './reducers';

const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReadingReducer({
        currentReading: {
            "future": 
            {
                "futureText": "You need to stop pushing yourself as hard, lest you wind up like this little guy.",
                "image": "roadkill.png",
                "name": "Roadkill",
                "pastText": "Bambi's mom wasn't happy when you ran her son over, so she put a curse on you. Bet you don't feel that flat tire was as random now, huh?",
                "presentText": "Our focus determines our existence, and boy, do YOU feel like crap today!"
            },
            "past":
            {
                "futureText": " This prediction's end worth once you're past the point where you could've actually used its wisdom.",
                "image": "useless-garbage.png",
                "name": "Useless Garbage",
                "pastText": "Oh, I'm sorry, you're saying this wasn't your mother's pet name for you?",
                "presentText": "The way you make me feel."
            },
            "present":
            {
                "futureText": "One day you'll wake up all alone and think, how did this come to pass? If only I'd visited a medium and asked them about it before...",
                "image": "woke-up-like-this.png",
                "name": "I Woke Up Like This",
                "pastText": "Oh, no, it's definitely not you, it's the way the stars have always aligned to make an asshole in the AM",
                "presentText": "That innate thing you think makes you so unique? It's called morning breath. Deal with it."
            }
        },
        currentPage: 'detail',
        previousPage: 'home'
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext }