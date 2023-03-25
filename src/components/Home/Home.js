import { React } from 'react';

import baseRelativePath from '../../path';

const Home = () => {
  return <div className="">
    <a href={`${baseRelativePath}/pages/analisis-2.html`}>New Analisis2</a><br/>
    <a href={`${baseRelativePath}/pages/analisis-3.html`}>New Analisis3</a><br/>
    <a href={`${baseRelativePath}/pages/matematica-discreta.html`}>New MD</a><br/>
  </div>;
};

export default Home;
