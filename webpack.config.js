const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js[x]?$/,
        include: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    modules: [path.resolve(__dirname, 'node_modules/@rainbow-me'), 'node_modules'],
    symlinks: false
  },
  watchOptions: {
    followSymlinks: true,
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  devtool: 'source-map',
};
