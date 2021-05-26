import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { CURRENT_PAGE, PREVIOUS_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const Shuffle = () => {
    // import the global state and dispatch
    const [state, dispatch] = useStoreContext();
    
    const { Random } = require("random-js");
    const random = new Random
    let messageOne = 'roadkill.png'
    let messageTwo = 'megadeath.png'
    let messageThree = 'charge.png'

    const [message, setMessage] = useState(messageOne)
    const props = useSpring({
      to: [
          { opacity: 1,
			transform: 'rotateX(0deg)',
			y: 0
			},
          { opacity: .99 },
          { opacity: 1 },
          { opacity: 0,
			transform: 'rotateX(180deg)',
			y: 750
		 }
        ],
      from: { 
		opacity: 0,
		transform: 'rotateX(180deg)',
		y: 750
	  },
      delay: 100,
    })

    useEffect (()=>{
        // display messages
        setTimeout(function(){ setMessage(messageTwo) }, 3000);
        setTimeout(function(){ setMessage(messageThree) }, 6000);
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
        <animated.img className='reading-messages' style={props} src={require(`../../assets/images/cards/${message}`).default} className='card-img'></animated.img>
    </div>
  )
}

export default Shuffle;
