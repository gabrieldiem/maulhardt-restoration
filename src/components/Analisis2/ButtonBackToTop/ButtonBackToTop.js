import React, { useEffect, useState } from 'react';

import './ButtonBackToTop.css';
import arrowUp from '../../../assets/arrow-up.svg';

const ButtonBackToTop = () => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      setVisible(true);
    } else if (scrollPosition <= 50 || scrollPosition === 0) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  });

  return <button type="button" className={'btn btn-secondary btn-floating btn-back-to-top ' + (visible ? 'btn-back-to-top-visible' : 'btn-back-to-top-hidden')} onClick={backToTop}>
    <img src={arrowUp}/>
  </button>;
};

export default ButtonBackToTop;
