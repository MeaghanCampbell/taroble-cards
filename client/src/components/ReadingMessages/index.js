import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'

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
    const { Random } = require("random-js");
    const random = new Random
    let messageOne = random.die(messages.length-1)
    let messageTwo = random.die(messages.length-1)
    let messageThree = random.die(messages.length-1)

    const [message, setMessage] = useState(messages[messageOne])
    const props = useSpring({
      to: [
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
        setTimeout(function(){ setMessage('LOAD DETAIL PAGE')  }, 9000);
    }, [])
    

  return (
    <div className="load-img-container">
        <animated.h1 className='reading-messages' style={props}>{message}</animated.h1>
    </div>
  )
}

export default ReadingMessages;
