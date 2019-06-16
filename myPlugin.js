
module.exports = function (babel, myArg) {
  const t = babel.types;
  // console.log(myArg);
  
  return {
    visitor: {
      Identifier(path) {
        // console.log(path.node);
        
        
      },
      BinaryExpression(a) {
        // console.log(a);
        
      },

      // ExpressionStatement(path) {
      //   console.log(path.node);
      // },

      CallExpression(path) {
        
      }
    }
  }
}