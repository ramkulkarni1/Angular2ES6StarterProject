const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const OUTPUT_FOLDER = './build';
const SRC_FOLDER = 'src';
const WEB_SERVER_PORT = 8080;


const webpackConfig = {
  output_folder: OUTPUT_FOLDER,
  src_folder: SRC_FOLDER,
  web_server_port: WEB_SERVER_PORT,
  context: path.join(__dirname, SRC_FOLDER),
  entry: {
    vendor: './js/vendor.js',
    bundle: [ './js/index.js' ],
  },
  output: {
    path: path.join(__dirname, OUTPUT_FOLDER),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  devtool: 'source-map',
  module : {
    loaders :[
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: [ 'latest', 'angular2' ]
        }
      },
      {
        test : /\.less$/,
        loader : 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'html?attrs=false&caseSensitive&removeAttributeQuotes=false'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    contentBase: OUTPUT_FOLDER,
    port: WEB_SERVER_PORT,
    hot: true,
    noInfo: false,
    stats: { colors: true },
    filename: 'bundle.js',
    publicPath: `http://localhost:${WEB_SERVER_PORT}`,
    // https: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new CopyPlugin([
      { from: 'html/*.html', flatten: true },
      // { from: 'html/templates/*.html', to: path.join(__dirname, `${OUTPUT_FOLDER}/templates`), flatten: true },
    ]),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
  ],
  resolve: {
    extensions: [ '', '.js', '.css', '.less' ],
  }
}

module.exports = webpackConfig;
