import baseRelativePath from './path';
import pagesData from './data/shared-data';

const currentURL = window.location.href;
let currentPageState = null;

function getFullHostname () {
  const currentLocation = window.location;
  let hostname = currentLocation.protocol + '//' + currentLocation.hostname;

  if (currentLocation.port && currentLocation.port !== '') {
    hostname += ':' + currentLocation.port;
  }

  return hostname;
}

pagesData.forEach(page => {
  if (currentURL.includes(`${baseRelativePath}/pages/${page}`)) {
    currentPageState = { isAPage: true, currentPage: page };
  }
});

if (currentPageState && currentPageState.isAPage) {
  const fullHostname = getFullHostname();

  let preciseEndpoint = window.location.href.split(`${fullHostname}${baseRelativePath}/pages/${currentPageState.currentPage}`)[1];

  if (preciseEndpoint === null || preciseEndpoint === '' || preciseEndpoint === '/') {
    preciseEndpoint = null;
  }

  if (preciseEndpoint && preciseEndpoint.substring(0, 5) === '.html') {
    preciseEndpoint = preciseEndpoint.split('.html')[1];
  }

  // document.cookie = 'sessionStorageSameSite=None;SameSite=None;Secure';
  sessionStorage.setItem('redirect', JSON.stringify({ fullUrl: window.location.href, page: currentPageState.currentPage, endpoint: preciseEndpoint, baseRelativePath }));
  window.location.replace(`${baseRelativePath}/pages/${currentPageState.currentPage}.html`);
} else {
  window.location.replace(`${baseRelativePath}/`);
}
