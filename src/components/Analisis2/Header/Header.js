import { React } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import baseRelativePath from '../../../path';
import pageRedirector from '../../../redirector';

import analisis2Banner from '../../../assets/analisis2/analisis2_banner.jpg';
import { videos, ejercicios } from '../../../data/analisis-2-data';

const Header = () => {
  return <header>
    <div className="container-fluid banner-container--header-am2">
      <Link className="navbar-brand" to={`${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}`}><img src={analisis2Banner} alt="Logo de la página que dice Análisis Matemático 2"/></Link>
    </div>
    <hr className="hr--header-am2" />
    <nav className="navbar--header-am2 navbar navbar-expand-lg justify-content-center">
      <div className="container-fluid justify-content-center">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <div className="d-flex justify-content-center inner-button--header-am2 align-items-center">
            <span className="navbar-toggler-icon"></span>
            <span>Menú</span>
          </div>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={`${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}`}>
                INICIO
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              VIDEOS
              </Link>
              <ul className="dropdown-menu">
                {videos.map((video, index) => {
                  const desiredPath = `${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}/video/${video[1]}`;
                  const isActive = (desiredPath === window.location.pathname);
                  return (
                    <li key={index.toString()}>
                      <Link className={`dropdown-item ${isActive ? 'active' : ''}`} to={desiredPath}>{index + 1}. {video[0]}</Link>
                    </li>);
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EJERCICIOS
              </Link>
              <ul className="dropdown-menu">
                {ejercicios.map((ejercicio, index) => {
                  const desiredPath = `${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}/ejercicios/${ejercicio[1]}`;
                  const isActive = (desiredPath === window.location.pathname);
                  return (
                    <li key={index.toString()}>
                      <Link className={`dropdown-item ${isActive ? 'active' : ''}`} to={desiredPath}>{ejercicio[0]}</Link>
                    </li>);
                })}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-current="page" to="#" >LIBRO DE VISITAS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr className="hr--header-am2" />
  </header>;
};

export default Header;
