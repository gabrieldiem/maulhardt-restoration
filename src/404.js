import baseRelativePath from './path';
import pagesData from './data/shared-data';

const currentURL = window.location.href;
let currentPageState = null;

pagesData.forEach(page => {
  if (currentURL.includes(`${baseRelativePath}/pages/${page}`)) {
    currentPageState = { isAPage: true, currentPage: page };
  }
});

if (currentPageState && currentPageState.isAPage) {
  window.location.replace(`${baseRelativePath}/pages/${currentPageState.currentPage}.html`);
} else {
  window.location.replace(`${baseRelativePath}/`);
}
