const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:/\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name:'[name].[ext]',
          outputPath: 'img/'
        }
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin ({
      filename: 'index.html',
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin ({
      filename:'css/[name].css'
    })
  ]
  
}