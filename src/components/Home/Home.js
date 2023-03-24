import { React } from 'react';
import { Link } from 'react-router-dom';

import baseRelativePath from '../../path';
import analisis2Page from '../../pages/analisis-2.html';

const Home = () => {
  return <div className="">
    {console.log(analisis2Page)}
    <a href={`${analisis2Page}`}>adasdasdas</a><br/>
    <Link to="analisis-2">Analisis 2</Link><br/>
    <Link to="analisis-3">Analisis 3</Link><br/>
    <Link to="matematica-discreta">Matematica Discreta</Link><br/>
  </div>;
};

export default Home;
