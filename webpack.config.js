const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: 'dist',
    filename: 'index.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {

        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {

          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
