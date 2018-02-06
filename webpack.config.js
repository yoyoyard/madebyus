module.exports = {
  devtool: 'eval-source-map',
  entry:  [
    __dirname + "/app/main.js",
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders : [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
  },
  devServer: {
      contentBase: "./public",
      historyApiFallback: true,
      inline: true
    }
}
