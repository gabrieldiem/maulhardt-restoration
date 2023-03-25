import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';
import baseRelativePath from '../path';
import pageRedirector from '../redirector';
import Analisis2 from '../components/Analisis2/Analisis2';
import MaterialOficial from '../components/Analisis2/MaterialOficial/MaterialOficial';
import Redir from '../components/Analisis2/Redir/Redir';

console.log('IM IN AM2');
(function () {
  // Get the current location of the page
  const currentLocation = window.location;
  console.log(window.location);
  console.log(window.location.search);

  // Check if there is a redirect in the query string
  if (currentLocation.search[1] === '/') {
    // Decode the redirect in the query string and replace "~and~" with "&"
    const decodedRedirect = currentLocation.search
      .slice(1)
      .split('&')
      .map(function (str) {
        console.log(str);
        return str.replace(/~and~/g, '&');
      })
      .join('?');

    // Replace the current state in the browser history with the decoded redirect
    window.history.replaceState(null, null, currentLocation.pathname.slice(0, -1) + decodedRedirect + currentLocation.hash);
  }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${baseRelativePath}/${pageRedirector('analisis-2', window.location.href)}`} element={<Analisis2 />} />
      <Route path={`${baseRelativePath}/pages/analisis-2/material-oficial`} element={<MaterialOficial />} />
      <Route path={`${baseRelativePath}/pages/analisis-2.html/material-oficial`} element={<Redir dest={`${baseRelativePath}/pages/analisis-2/material-oficial`} />} />
      <Route path="*" element={<Navigate to={`${baseRelativePath}/pages/analisis-2`} /> } />
    </Routes>
  </BrowserRouter>
);
