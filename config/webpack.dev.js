const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env, ...args) {
  const mode = env.production ? 'production' : 'development';
  const cwd = process.cwd();
  const PATHS = {
    src: path.join(cwd, 'src'),
    dist: path.join(cwd, 'dist'),
    dll: path.join(cwd, 'dll'),
  }

  let plugins = [
    new HtmlWebpackPlugin({
      hash: true,
      minify: true,
      title: 'mywebpack',
      dllSrc: `${'./dll'}/vendor_dll.js`,
      template: path.resolve(cwd, './public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ];

  return merge(webpackCommon(env, ...args), {
    mode,
    context: cwd,
    devtool: 'cheap-module-eval-source-map',

    plugins,

    devServer: {
      contentBase: PATHS.dist,
      host: '0.0.0.0',
      port: 8000,
      hot: true,
      historyApiFallback: true,
      // open: true,
      stats: 'errors-only',
      proxy: {
        '/api': {
          target: 'http://0.0.0.0:9000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          },
          bypass(req) {
            if (req.headers.accept.indexOf('html') !== -1) {
              return '/index.html'
            }
          }
        },
      }

    }
  })
}
