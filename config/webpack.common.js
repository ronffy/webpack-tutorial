const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin') // 去除未使用的css

module.exports = function (env) {
  const cwd = process.cwd();
  const PATHS = {
    src: path.join(cwd, 'src'),
    dist: path.join(cwd, 'dist'),
    dll: path.join(cwd, 'dll'),
  }

  const isProduction = env.production;
  const publicPath = 'http://www.baidu.com';

  const rules = [
    {
      test: /\.(le|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: `${cwd}`,
            hmr: !isProduction
          }
        },
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
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        },

      ]
    },
    {
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader'
        }
      ],
      exclude: /node_modules/,
    },
  ]

  const plugins = [
    new PurgecssWebpackPlugin({
      paths: glob.sync(path.join(`${PATHS.src}/**/*`), { nodir: true })
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(cwd, './assets'),
        to: 'assets'
      },
      {
        from: path.resolve(cwd, 'dll'),
        to: 'dll'
      }
    ]),
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
    entry: {
      index: './src/index.js',
      main: './src/main.js',
    },
    output: {
      path: PATHS.dist,
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[contenthash:8].js',
      publicPath: isProduction ? publicPath : ''
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

    module: {
      rules,
    },

    plugins,

    externals: {
      jquery: 'jQuery'
    },

    watchOptions: {
      ignored: /node_modules/
    },

    resolve: {
      modules: [
        PATHS.src,
        'node_modules'
      ],
      extensions: ['.json', '.js'],
      alias: {
        utils: path.resolve(PATHS.src, './utils')
      }
    },

  }
}