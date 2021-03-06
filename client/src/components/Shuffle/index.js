import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { CURRENT_PAGE, PREVIOUS_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const Shuffle = () => {
  // import the global state and dispatch
  const [state, dispatch] = useStoreContext();
  // extract currentReading from the state object
  const { currentReading } = state;

  let pastCard = currentReading.reading.past.image
  let presentCard = currentReading.reading.present.image
  let futureCard = currentReading.reading.future.image

  const [card, setCard] = useState(pastCard)
  const [title, setTitle] = useState('Past')
  const props = useSpring({
    to: [
      {
        opacity: 1,
        transform: 'rotateX(0deg)',
        y: -60,
        height: 400
      },
      { opacity: .99 },
      { opacity: 1 },
      {
        opacity: 0,
        transform: 'rotateX(180deg)',
        y: 750,
        height: 0
      }
    ],
    from: {
      opacity: 0,
      transform: 'rotateX(180deg)',
      y: 750,
      x: 0,
      height: 0
    },
    delay: 100,
  })


  useEffect(() => {
    // display cards
    setTimeout(function () {
      setCard(presentCard);
      setTitle('Present');
    }, 3000);

    setTimeout(function () {
      setCard(futureCard);
      setTitle('Future');
    }, 6000);

    // load detail page
    setTimeout(function () {
      dispatch({
        type: CURRENT_PAGE,
        // generate a new reading and save it to the currentReading in global state
        currentPage: 'detail'
      })
      dispatch({
        type: PREVIOUS_PAGE,
        // generate a new reading and save it to the currentReading in global state
        currentPage: 'detail'
      })
    }, 9000);
  }, [ dispatch , futureCard, presentCard ])


  return (
    <div className="load-img-container">
      <div className='border'></div>
      <animated.div style={props}>
        <h3 className='detail-header'>{title}</h3>
        <img className='card-img' src={require(`../../assets/images/cards/${card}`).default} alt={title} />
      </animated.div>
      <footer className='border'></footer>
    </div>
  )
}

export default Shuffle;
