import React from 'react';

import './Section.css';

const Section = ({ bgColor, titleColor, textColor, title, text, textWidth, image }) => {
  return <div className='container-fluid container--section-am2' style={{ backgroundColor: bgColor }}>
    <img className="image--section-am2" src={image} />
    <h1 style={{ color: titleColor }} className="title--section-am2">{title}</h1>
    <p style={{ color: textColor, width: textWidth }} className="text--section-am2">{text}</p>
  </div>;
};

export default Section;
