const withOptimizedImages = require('next-optimized-images');
const withFonts = require('nextjs-fonts');

const { envConfig } = require('./config/env.js');

module.exports = withOptimizedImages(
  withFonts({
    env: envConfig(),
    sassOptions: {
      cssModules: true,
      includePaths: ['./src'],
    },
    handleImages: ['jpeg', 'png', 'webp', 'jpg'],
    pageExtensions: ['page.tsx'],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  })
);
