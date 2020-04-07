const config = require('config');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    camelCase: true,
    localIdentName: '[path][local]',
  },
  env: config,
  exportTrailingSlash: true,
}));
