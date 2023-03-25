import React from 'react';

import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return <div className="container--footer-am2">
    <hr className="container-fluid hr--footer-am2"/>
    <h5 className="text--footer-am2">© Copyright {currentYear}. Facultad de Ingeniería - Universidad de Buenos Aires.</h5>
  </div>;
};

export default Footer;
