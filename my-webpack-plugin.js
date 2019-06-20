
const pluginName = 'MyWebpackPlugin';

module.exports = class MyWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log('start-', pluginName, '\n');
    console.log('options-', compiler.options, '\n');
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('compilation \n', compilation);
      
    })
  }
}