import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';
import baseRelativePath from '../path';
import pageRedirector from '../redirector';
import MatematicaDiscreta from '../components/MatematicaDiscreta/MatematicaDiscreta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${baseRelativePath}/${pageRedirector('matematica-discreta', window.location.href)}`} element={<MatematicaDiscreta />} />
    </Routes>
  </BrowserRouter>
);
