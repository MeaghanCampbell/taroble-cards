import React from 'react';
// import anime from 'animejs';
import animatedT from '../../assets/images/animated-logo.svg'

const Loading = (props) => {
  // anime({
  //   targets: '#T path',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: 'easeInOutSine',
  //   duration: 2000,
  //   delay: function (el, i) { return i * 500 },
  //   direction: 'alternate',
  //   loop: true
  // });

  return (
    <div>
      <div className="load-img-container">
      <object className='t' type="image/svg+xml" data={animatedT}>svg-animation</object>
      </div>
    </div>
  )
}

export default Loading;
