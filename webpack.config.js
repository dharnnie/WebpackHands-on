var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:'./src/app.js',
  output:{
    path: __dirname +'/dist',
    filename:'bundle.js'
  },
  module:{
    rules:[
      {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']}  
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
    })
  ]
}
