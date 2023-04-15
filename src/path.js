/* Necessary in order to serve the urls properly in Github Pages */

// It basically exports the correct baseRelativePath which for Github Pages would be the repository name
// and checks if the project is running in production or development mode. This is to differentiate
// between development-local, production-local and production-github-pages and determine if it needs to
// apply or not the baseRelativePath (not apply it would mean it is an empty string). Thus, this is used
// in every URL redirect relative to the root path.

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvNotLocalhost = window.location.hostname !== 'localhost' &&
                          !window.location.href.includes('127.0.0.1') &&
                          !window.location.href.includes('192.168');

const baseRelativePath = (isEnvProduction && isEnvNotLocalhost) ? process.env.BASE_RELATIVE_PATH : '';

export default baseRelativePath;
