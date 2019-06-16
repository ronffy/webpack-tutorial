const CleanWebpackPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 分析打包文件的工具
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = function (env, ...args) {
  const mode = env.production ? 'production' : 'development';
  const cwd = process.cwd();

  let plugins = [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new webpackCommon.HashedModuleIdsPlugin(), // 解决 不论是否添加任何新的本地依赖，对于前后两次构建，vendor hash 都应该保持一致
  ];

  return merge(webpackCommon(env, ...args), {
    mode,
    context: cwd,

    devtool: 'hidden-source-map',

    plugins,
  })
}