import { React } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import baseRelativePath from '../../../path';

import analisis2Banner from '../../../assets/analisis2/analisis2_banner.jpg';

const videos = ['GEOMETRÍA DEL PLANO Y DEL ESPACIO', 'FUNCIONES. LÍMITES. CONTINUIDAD', 'DIFERENCIABILIDAD. SUPERFICIES', 'FUNCIONES COMPUESTAS E IMPLÍCITAS',
  'POLINOMIO DE TAYLOR. EXTREMOS', 'ECUACIONES DIFERENCIALES', 'INTEGRALES CURVILINEAS', 'INTEGRALES MULTIPLES', 'INTEGRALES DE SUPERFICIE - FLUJO', 'TEOREMAS INTEGRALES',
  'ECUACIONES DIFERENCIALES (II)'];

const ejercicios = ['EJERCICIOS UNIDADES 1-5', 'EJERCICIOS UNIDADES 6-11'];

const Header = () => {
  return <>
    <div className="container-fluid banner-container--header-am2">
      <Link className="navbar-brand" to={`${baseRelativePath}/analisis-2`}><img src={analisis2Banner} /></Link>
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
              <Link className="nav-link active" aria-current="page" to={`${baseRelativePath}/analisis-2`}>INICIO</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              VIDEOS
              </Link>
              <ul className="dropdown-menu">
                {videos.map((video, index) => {
                  return <>
                    <li key={index + 1}>
                      <Link className="dropdown-item" to="#">{index + 1}. {video}</Link>
                    </li>
                  </>;
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EJERCICIOS
              </Link>
              <ul className="dropdown-menu">
                {ejercicios.map((ejercicio, index) => {
                  return <>
                    <li key={index}>
                      <Link className="dropdown-item" to="#">{ejercicio}</Link>
                    </li>
                  </>;
                })}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">LIBRO DE VISITAS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr className="hr--header-am2" />
  </>;
};

export default Header;
