import baseRelativePath from './path';

function pageRedirector (desiredPage, windowLocation) {
  if (windowLocation.includes(desiredPage) && windowLocation.includes('.html')) {
    window.location.replace(`${baseRelativePath}/pages/${desiredPage}`);
  }

  return `pages/${desiredPage}`;
}

export default pageRedirector;
