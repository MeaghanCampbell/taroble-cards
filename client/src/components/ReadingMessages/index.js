import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { CURRENT_PAGE, PREVIOUS_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const messages = [
    `Searching your browser history…`,
    `Looking at your ex’s social media accounts…`,
    `Analyzing your music playlists for mood disorders…`,
    `Judging you based on your financial transactions…`,
    `Googling your name…`,
    `Scanning your saved images and photos…`,
    `Querying school records…`,
    `Checking your credit history…`,
    `Accessing your previous tax returns…`,
    `Running your license plate…`,
    `Pulling your criminal records…`,
    `Hacking your web enabled devices…`,
    `Gathering your dark web activity…`,
    `Considering your health records…`,
    `Gauging your loneliness based on streaming history…`
]

const ReadingMessages = () => {
    // import the global state and dispatch
    const [state, dispatch] = useStoreContext();
    
    const { Random } = require("random-js");
    const random = new Random
    let messageOne = random.die(messages.length-1)
    let messageTwo = random.die(messages.length-1)
    let messageThree = random.die(messages.length-1)

    const [message, setMessage] = useState(messages[messageOne])
    const props = useSpring({
      to: [
          { opacity: 1 },
          { opacity: .99 },
          { opacity: 1 },
          { opacity: 0 }
        ],
      from: { opacity: 0 },
      delay: 100,
    })

    useEffect (()=>{
        // keep messages unique
        while (messageOne === messageTwo) {
            messageTwo = random.die(messages.length-1)
        }
        while (messageThree === messageOne || messageThree === messageTwo) {
            messageThree = random.die(messages.length-1)
        }
        // display messages
        setTimeout(function(){ setMessage(messages[messageTwo]) }, 3000);
        setTimeout(function(){ setMessage(messages[messageThree]) }, 6000);
        // load detail page
        setTimeout(function(){ dispatch({
          type: CURRENT_PAGE,
          // generate a new reading and save it to the currentReading in global state
          currentPage: 'detail'
        }) 
        dispatch({
          type: PREVIOUS_PAGE,
          // generate a new reading and save it to the currentReading in global state
          currentPage: 'detail'
        })}, 9000);
    }, [])
    

  return (
    <div className="load-img-container">
        <animated.h1 className='reading-messages' style={props}>{message}</animated.h1>
    </div>
  )
}

export default ReadingMessages;
