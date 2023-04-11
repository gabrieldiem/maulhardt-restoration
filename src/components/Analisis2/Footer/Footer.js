import React from 'react';

import './Footer.css';
import githubLogo from '../../../assets/github-logo.png';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return <div className="container--footer-am2">
    <hr className="container-fluid hr--footer-am2"/>
    <h5 className="text--footer-am2">
      © Copyright {currentYear}. Facultad de Ingeniería - Universidad de Buenos Aires.
    </h5>
    <h5 className="text--footer-am2">
      <a href="https://github.com/gabrieldiem/maulhardt-restoration" target="_blank" rel="noreferrer"> <img src={githubLogo} /> Source</a>. Reconstruido con ♥ por <a href="https://github.com/gabrieldiem" target="_blank" rel="noreferrer">@gabrieldiem</a>.
    </h5>
  </div>;
};

export default Footer;
