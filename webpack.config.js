const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'home.[hash].bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new AssetsPlugin({
      filename: 'manifest.json',
      path: path.join(__dirname, '/dist'),
      prettyPrint: true,
      metadata: {
        componentName: 'HomeComponent'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
