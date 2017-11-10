var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:'./src/app.js',
  output:{
    path: __dirname +'/dist',
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Learning Webpack2 Demo',
      minify:{
        collapseWhitespace: false
      },
      hash: true,
      filename: 'index.html'
    }),
    new ExtractTextPlugin("style.css")
  ]
}
