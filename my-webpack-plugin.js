
const pluginName = 'MyWebpackPlugin';

function MyWebpackPlugin(options) {
  this.options = options;
}

MyWebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.compilation.tap(pluginName, compilation => {
    // console.log('compilation \n', compilation);

  })
}

module.exports = MyWebpackPlugin