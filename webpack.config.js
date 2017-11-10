var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/app.js',
  output:{
    path: __dirname +'/dist',
    filename:'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Learning Webpack2 Demo',
      minify:{
        collapseWhitespace: true
      },
      hash: true,
      filename: 'index.html'
    })
  ]
}
