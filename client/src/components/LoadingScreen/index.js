import React from 'react';
import animatedT from '../../assets/images/figma-t-undraw.svg'

const Loading = () => {
  return (
    <div>
      <div className="load-img-container">
      <object className='t' type="image/svg+xml" data={animatedT}>svg-animation</object>
      </div>
    </div>
  )
}

export default Loading;
