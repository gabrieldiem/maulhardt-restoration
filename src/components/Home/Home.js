import { React } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div className="">
    <Link to="analisis-2">Analisis 2</Link><br/>
    <Link to="analisis-3">Analisis 3</Link><br/>
    <Link to="matematica-discreta">Matematica Discreta</Link><br/>
  </div>;
};

export default Home;
