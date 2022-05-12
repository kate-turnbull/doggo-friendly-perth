const path = require('path')

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.join(__dirname, './server/public/'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
      
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}