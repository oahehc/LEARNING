const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        loader: 'css-loader?importLoaders=1!postcss-loader'
      }),
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    }],
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    publicPath: "/",
    contentBase: './dist',
    // hot: true,
  },
};

// module.exports = {
//   entry: {
//     'build': "./src/main.js",
//     // 'style': "./src/main.css",
//   },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     // publicPath: '/dist/',
//     filename: '[name].js'
//   },
//   module: {
//     rules: [{
//       test: /\.css$/,
//       exclude: /node_modules/,
//       use: [{
//           loader: 'style-loader',
//         },
//         {
//           loader: 'css-loader',
//           options: {
//             sourceMap: true,
//             importLoaders: 1,
//           }
//         },
//         {
//           loader: 'postcss-loader',
//           options: {
//             sourceMap: 'inline',
//           }
//         }
//       ]
//     }]
//   },
//   devtool: '#eval-source-map'
// }