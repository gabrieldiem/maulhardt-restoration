import baseRelativePath from './path';
import React from 'react';
import { Navigate } from 'react-router-dom';

function pageRedirector (desiredPage, windowLocation) {
  const isFullPageInHtmlForm = windowLocation.includes(desiredPage) && windowLocation.includes('.html');
  const doesFullPageEndWithHtml = windowLocation.split('.html')[1] === '';

  if (isFullPageInHtmlForm && !doesFullPageEndWithHtml) {
    // Retrieve the windowLocation without the html
    const end = windowLocation.split('.html')[1];
    // Let the router take the redirect task to the non html page
    <Navigate to={`${baseRelativePath}/pages/${desiredPage}${end}`} />;
  } else if (isFullPageInHtmlForm) {
    // Just redirect to the desiredPage
    window.location.replace(`${baseRelativePath}/pages/${desiredPage}`);
  }

  return `pages/${desiredPage}`;
}

export default pageRedirector;
