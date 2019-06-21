
const pluginName = 'MyWebpackPlugin';

module.exports = class MyWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('compilation \n', compilation);
      
    })
  }
}