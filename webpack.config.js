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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
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