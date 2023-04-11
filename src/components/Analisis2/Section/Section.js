import React from 'react';
import { Link } from 'react-router-dom';

import './Section.css';

const Section = ({ bgColor, titleColor, textColor, title, text, textWidth, image, isLink, isLocal, link }) => {
  return <section className='container-fluid container--section-am2' style={{ backgroundColor: bgColor }}>
    {
      isLink
        ? (isLocal
          ? <Link to={link} rel="noreferrer"><img className="image--section-am2" src={image} alt="Link a la sección de la página correspondiente"/></Link>
          : <a href={link} target="_blank" rel="noreferrer"><img className="image--section-am2" src={image} alt="Link al video de Youtube de esta sección"/></a>)
        : <img className="image--section-am2" src={image} alt="Imagen ilustrativa para la sección"/>
    }
    <h1 style={{ color: titleColor }} className="title--section-am2">{title}</h1>
    <p style={{ color: textColor, width: textWidth }} className="text--section-am2">{text}</p>
  </section>;
};

export default Section;
