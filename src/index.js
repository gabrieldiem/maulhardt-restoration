import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home/Home';
import './index.css';
import baseRelativePath from './path';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${baseRelativePath}/`} element={<Home />} />
    </Routes>
  </BrowserRouter>
);
