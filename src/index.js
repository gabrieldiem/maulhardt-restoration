import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home/Home';
import Analisis2 from './components/Analisis2/Analisis2';
import Analisis3 from './components/Analisis3/Analisis3';
import MatematidaDiscreta from './components/MatematicaDiscreta/MatematicaDiscreta';
import './index.css';
import baseRelativePath from './path';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${baseRelativePath}/`} element={<Home />} />
      <Route path={`${baseRelativePath}/analisis-2`} element={<Analisis2 />} />
      <Route path={`${baseRelativePath}/analisis-3`} element={<Analisis3 />} />
      <Route path={`${baseRelativePath}/matematica-discreta`} element={<MatematidaDiscreta />} />
    </Routes>
  </BrowserRouter>
);
