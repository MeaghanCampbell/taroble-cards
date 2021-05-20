import React from 'react';
import anime from 'animejs';

const Loading = () => {
  anime({
    targets: '#T path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function (el, i) { return i * 500 },
    direction: 'alternate',
    loop: true
  });

  return (
    <div>
      <div className="load-img-container">
        <svg id='T' width="113" height="150" viewBox="0 0 113 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.16003 10.1602H103.2" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M7.54004 25.6899H49V79.1999H62.81V128.84" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M62.8101 25.6899H85.4001" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M95.23 25.6899H103.2" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M7.53003 39.8301H39.59" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M102.12 39.8301H62.8101V65.3401" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M101.76 52.5898H74.1V85.0298" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M49 89.7402V139.09" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          <path d="M8.16003 54.25H39.59" stroke="#CC9B54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  )
}

export default Loading;
