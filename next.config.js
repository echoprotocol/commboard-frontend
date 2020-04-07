const config = require('config');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

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
