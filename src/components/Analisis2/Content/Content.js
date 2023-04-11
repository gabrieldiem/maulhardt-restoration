import { React } from 'react';
import Section from '../Section/Section';

import { secciones } from '../../../data/analisis-2-data';
import baseRelativePath from '../../../path';
import pageRedirector from '../../../redirector';
import photo0 from '../../../assets/analisis2/photo1_mac_gradiente.png';
import photo1 from '../../../assets/analisis2/photo0_1_integral.jpg';
import photo2 from '../../../assets/analisis2/photo1_mac_plano_tangente.png';
import photo3 from '../../../assets/analisis2/photo2_ipad_fiuba_original.png';
import photo4 from '../../../assets/analisis2/photo3_ipad_lineas_coordenadas.png';
import photo5 from '../../../assets/analisis2/photo4_ipad_ejercicio.png';

import './Content.css';

const [blackColorHexa, whiteColorHexa, offPink, grey1, grey2] = ['#000000', '#ffffff', 'rgb(223, 192, 194)', 'rgb(186, 186, 186)', 'rgb(81, 81, 81)'];

const Content = () => {
  return <>
    <Section bgColor={whiteColorHexa} titleColor={blackColorHexa} textColor={grey2} title={secciones[0][0]}
      text={secciones[0][1]} textWidth={'65vw'} image={photo0} isLink={true} isLocal={false}
      link="https://youtu.be/_nmEQlKY2qU" className="section-am2" />

    <Section bgColor={blackColorHexa} titleColor={offPink} textColor={grey1} title={secciones[1][0]}
      text={secciones[1][1]} textWidth={'65vw'} image={photo1} isLink={true} isLocal={true}
      link={`${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}/ejercicios/material-oficial-final`} className="section-am2" />

    <Section bgColor={whiteColorHexa} titleColor={blackColorHexa} textColor={grey2} title={secciones[2][0]}
      text={secciones[2][1]} textWidth={'85vw'} image={photo2} isLink={false} isLocal={false}
      link="" className="section-am2" />

    <Section bgColor={blackColorHexa} titleColor={whiteColorHexa} textColor={grey1} title={secciones[3][0]}
      text={secciones[3][1]} textWidth={'65vw'} image={photo3} isLink={true} isLocal={false}
      link="https://youtu.be/z7v2iQYjTJM" className="section-am2" />

    <Section bgColor={whiteColorHexa} titleColor={blackColorHexa} textColor={grey2} title={secciones[4][0]}
      text={secciones[4][1]} textWidth={'85vw'} image={photo4} isLink={false} isLocal={false}
      link="" className="section-am2" />

    <Section bgColor={blackColorHexa} titleColor={whiteColorHexa} textColor={grey1} title={secciones[5][0]}
      text={secciones[5][1]} textWidth={'85vw'} image={photo5} isLink={false} isLocal={false}
      link="" className="section-am2" />
  </>;
};

export default Content;
