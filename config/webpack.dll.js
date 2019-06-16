const webpack = require('webpack')
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 分析打包文件的工具

const DLL_NAME = '[name]_dll';

const vendor = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
]

const cwd = process.cwd();
const PATHS = {
  dll: path.resolve(cwd, 'dll'),
}

module.exports = function(env) {
  const mode = env.production ? 'production' : 'development';
  return {
    mode,
    entry: {
      vendor
    },
    output: {
      path: PATHS.dll,
      filename: `${DLL_NAME}.js`,
      library: DLL_NAME,
      libraryTarget: 'umd'
    },

    resolve: {
      modules: ['node_modules'],
      extensions: ['.js'],
    },

    stats: 'errors-only',

    plugins: [
      new webpack.DllPlugin({
        name: DLL_NAME,
        path: path.join(PATHS.dll, 'dll_manifest.json')
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }),
    ]
  }
}