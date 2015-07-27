var path = require('path')

module.exports = {
  entry: {
    'demo/bundle': './demo/app'
  },
  devtool: 'source-map',

  output: {
    path: '.',
    filename: '[name].js',
    publicPath: '/demo/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  devServer: {
    contentBase: './demo',
    host: 'localhost',
    inline: true,
    info: false
  }
}