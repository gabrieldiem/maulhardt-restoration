import { React } from 'react';
import Section from '../Section/Section';

import { secciones } from '../../../data/analisis-2-data';
import photo0 from '../../../assets/analisis2/photo0_integral.jpg';
import photo1 from '../../../assets/analisis2/photo1_mac_plano_tangente.png';
import photo2 from '../../../assets/analisis2/photo2_ipad_fiuba_original.png';
import photo3 from '../../../assets/analisis2/photo3_ipad_lineas_coordenadas.png';
import photo4 from '../../../assets/analisis2/photo4_ipad_ejercicio.png';

import './Content.css';

const [blackColorHexa, whiteColorHexa, offPink, grey1, grey2] = ['#000000', '#ffffff', 'rgb(223, 192, 194)', 'rgb(186, 186, 186)', 'rgb(81, 81, 81)'];

const Content = () => {
  return <>
    <Section bgColor={blackColorHexa} titleColor={offPink} textColor={grey1} title={secciones[0][0]} text={secciones[0][1]} textWidth={'65vw'} image={photo0} className="section-am2" />
    <Section bgColor={whiteColorHexa} titleColor={blackColorHexa} textColor={grey2} title={secciones[1][0]} text={secciones[1][1]} textWidth={'85vw'} image={photo1} className="section-am2" />
    <Section bgColor={blackColorHexa} titleColor={whiteColorHexa} textColor={grey1} title={secciones[2][0]} text={secciones[2][1]} textWidth={'65vw'} image={photo2} className="section-am2" />
    <Section bgColor={whiteColorHexa} titleColor={blackColorHexa} textColor={grey2} title={secciones[3][0]} text={secciones[3][1]} textWidth={'85vw'} image={photo3} className="section-am2" />
    <Section bgColor={blackColorHexa} titleColor={whiteColorHexa} textColor={grey1} title={secciones[4][0]} text={secciones[4][1]} textWidth={'85vw'} image={photo4} className="section-am2" />
  </>;
};

export default Content;
