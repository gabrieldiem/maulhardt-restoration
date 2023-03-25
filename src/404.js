import baseRelativePath from './path';
import pagesData from './data/shared-data';

const currentURL = window.location.href;
let currentPageState = null;

// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
// This script takes the current url and converts the path and query
// string into just a query string, and then redirects the browser
// to the new url with only a query string and hash fragment,
// e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
// https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
// Note: this 404.html file must be at least 512 bytes for it to work
// with Internet Explorer (it is currently > 512 bytes)

// If you're creating a Project Pages site and NOT using a custom domain,
// then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
// This way the code will only replace the route part of the path, and not
// the real directory in which the app resides, for example:
// https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
// https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
// Otherwise, leave pathSegmentsToKeep as 0.
// Define the number of path segments to keep
const pathSegmentsToKeep = (baseRelativePath === '') ? 0 : 1;

// Get the current location of the page
const currentLocation = window.location;

pagesData.forEach(page => {
  if (currentURL.includes(`${baseRelativePath}/pages/${page}`)) {
    currentPageState = { isAPage: true, currentPage: page };
  }
});

if (currentPageState && currentPageState.isAPage) {
  // Build the new URL
  let newUrl = currentLocation.protocol + '//';
  newUrl += currentLocation.hostname;
  if (currentLocation.port && currentLocation.port !== '') {
    newUrl += ':' + currentLocation.port;
  }

  newUrl += '/' + currentLocation.pathname.split('/').slice(0, 1 + pathSegmentsToKeep)[pathSegmentsToKeep] + `pages/${currentPageState.currentPage}.html` + '/?/';
  newUrl += currentLocation.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~').split(`${currentPageState.currentPage}/`)[1];
  console.log('NEW', newUrl);
  // Redirect the browser to the new URL
  currentLocation.replace(newUrl);
} else {
  window.location.replace(`${baseRelativePath}/`);
}
