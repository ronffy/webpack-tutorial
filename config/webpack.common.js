const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { version } = require('../package.json');

const cwd = process.cwd();
const PATHS = {
  cwd,
  src: path.resolve(cwd, 'src'),
  dist: path.resolve(cwd, 'dist'),
}
module.exports.PATHS = PATHS;

const rules = [
  {
    test: /\.(le|c)ss$/,
    include: [
      PATHS.src
    ],
    use: [
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'less-loader'
      }
    ]
  },
  {
    test: /\.js$/,
    include: [
      PATHS.src
    ],
    use: [
      {
        loader: 'babel-loader',
      }
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './image/'
        }
      },
    ]
  },
]

module.exports.rules = rules;

module.exports.common = function (env) {
  const isProduction = env.production;
  const publicPath = env.publicPath;

  const plugins = [
    new HtmlWebpackPlugin({
      hash: true,
      minify: true,
      title: 'mywebpack',
      // dllSrc: `${isProduction ? publicPath : './dll'}/vendor_dll.js`, // webpack4 可通过 optimization。cacheGroups.vendor 实现
      template: path.resolve(cwd, './public/index.html')
    }),
    // webpack4 可通过 optimization。cacheGroups.vendor 实现
    // new webpack.DllReferencePlugin({
    //   context: cwd,
    //   manifest: require(`${cwd}/dll/dll_manifest.json`)
    // })
  ];

  return {
    context: PATHS.src,
    entry: {
      index: 'index.js',
      main: 'main.js',
    },
    output: {
      path: path.join(PATHS.dist, version),
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].js',
      publicPath: isProduction ? publicPath : '/',
      sourceMapFilename: 'souremaps/[file].map'
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
      runtimeChunk: 'single', // 将 runtime 代码拆分为一个单独的 chunk
    },

    plugins,

    externals: {
      jquery: 'jQuery', // jquery 不会被打进包里，需要外部引入依赖，如通过 script 标签引入 jQuery 库
    },

    stats: 'errors-only', // 只在发生错误时输出信息

    resolve: {
      modules: [
        PATHS.src,
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        utils: path.resolve(PATHS.src, './utils')
      }
    },

  }
}
