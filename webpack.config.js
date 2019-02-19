const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new BrowserSyncPlugin({
      files: ['./**/*.html', './src/*.js'],
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['./'],
      },
    }),
  ],
};

module.exports = config;

console.log(webpack);
