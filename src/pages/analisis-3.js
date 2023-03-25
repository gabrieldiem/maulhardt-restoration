import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';
import baseRelativePath from '../path';
import pageRedirector from '../redirector';
import Analisis3 from '../components/Analisis3/Analisis3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${baseRelativePath}/${pageRedirector('analisis-3', window.location.href)}`} element={<Analisis3 />} />
    </Routes>
  </BrowserRouter>
);
