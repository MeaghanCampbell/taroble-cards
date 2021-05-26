import React, { useEffect } from 'react';
import animatedT from '../../assets/images/figma-t-undraw.svg'
import { CURRENT_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const Loading = () => {
  // import the global state and dispatch
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    setTimeout(function () {
      dispatch({
        type: CURRENT_PAGE,
        currentPage: 'home'
      })
    }, 9000);
  }, [])


  return (
      <div className="load-img-container">
      <div className='border'></div>
        <object className='t' type="image/svg+xml" data={animatedT}>svg-animation</object>
      <footer className='border'></footer>
      </div>
  )
}

export default Loading;
