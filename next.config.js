const config = require('config');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    camelCase: true,
    localIdentName: '[path][local]',
  },
  env: config,
  exportTrailingSlash: true,
});
