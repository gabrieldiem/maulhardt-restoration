import baseRelativePath from './path';
import React from 'react';
import { Navigate } from 'react-router-dom';

function pageRedirector (desiredPage, windowLocation) {
  if (windowLocation.includes(desiredPage) && windowLocation.includes('.html') && (windowLocation.split('.html')[1] !== '')) {
    const end = windowLocation.split('.html')[1];
    <Navigate to={`${baseRelativePath}/pages/${desiredPage}${end}`} />;
  } else if (windowLocation.includes(desiredPage) && windowLocation.includes('.html')) {
    window.location.replace(`${baseRelativePath}/pages/${desiredPage}`);
  }

  return `pages/${desiredPage}`;
}

export default pageRedirector;
