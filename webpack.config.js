const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
  mode: 'development'
};

module.exports = config;

console.log(webpack);
