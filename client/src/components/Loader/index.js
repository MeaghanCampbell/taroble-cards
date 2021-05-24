import React, { useEffect } from 'react';
import animatedT from '../../assets/images/figma-t-undraw.svg'

const Loader = () => {

  return (
    <div>
      <div className="load-img-container">
      <object className='t' type="image/svg+xml" data={animatedT}>svg-animation</object>
      </div>
    </div>
  )
}

export default Loader;
