import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home/Home';
import './index.css';
import baseRelativePath from './path';

console.log('IM IN INDEX');
(function () {
  // Get the current location of the page
  const currentLocation = window.location;

  // Check if there is a redirect in the query string
  if (currentLocation.search[1] === '/') {
    // Decode the redirect in the query string and replace "~and~" with "&"
    const decodedRedirect = currentLocation.search
      .slice(1)
      .split('&')
      .map(function (str) {
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
      <Route path={`${baseRelativePath}/`} element={<Home />} />
    </Routes>
  </BrowserRouter>
);
