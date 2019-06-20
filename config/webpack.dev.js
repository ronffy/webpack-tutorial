const webpack = require('webpack')
const merge = require('webpack-merge');
const { common: webpackCommon, PATHS, rules } = require('./webpack.common');
const MyWebpackPlugin = require('../my-webpack-plugin');

module.exports = function (env, ...args) {
  const mode = env.production ? 'production' : 'development';

  let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new MyWebpackPlugin({
      ronffy: true
    })
  ];

  return merge(webpackCommon(env, ...args), {
    mode,
    context: PATHS.cwd,
    devtool: 'cheap-module-eval-source-map',

    plugins,

    module: {
      rules,
    },

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
