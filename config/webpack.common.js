const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreEndWebpackPlugin = require('pre-end-webpack-plugin');
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
    test: /\.[jt]sx?$/,
    include: [
      PATHS.src
    ],
    use: [
      {
        loader: 'babel-loader',
      },
      // 未使用 ts-loader ,而是使用的 @babel/preset-typescript
      // 1. ts-loader 比 @babel/preset-typescript 运行慢，
      // 2. ts-loader 比 @babel/preset-typescript 打出来的包偏大
      // 3. ts-loader 在处理 import() 异步加载语法时有问题
      // {
      //   loader: 'ts-loader',
      // }
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
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

  const startTime = +new Date();
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
    // }),
    new PreEndWebpackPlugin(() => {
      console.log('\nRunning time:', +new Date() - startTime, 'ms');
    })
  ];

  return {
    context: PATHS.src,
    entry: {
      index: 'index.tsx',
      main: 'main.tsx',
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
