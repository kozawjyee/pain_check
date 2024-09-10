const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  performance: {
    hints: false,
    maxEntrypointSize: 51200,
    maxAssetSize: 51200
  },
  devServer: {
    historyApiFallback: true
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
    alias: {
      CssStyles: path.join(__dirname, 'src/assets/css/')
    },
    modules: [
        path.join(__dirname, 'node_modules')
    ],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css']
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
};