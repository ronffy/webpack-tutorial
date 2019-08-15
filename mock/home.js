const { defaultResult, Mock } = require('./_common')

function getCollapse(id) {
  return Mock.mock({
    ...defaultResult,
    'data|3': [
      {
        'id|+1': 1,
        title: '@cname',
        content: '@email',
      },
    ]
  });
}

module.exports = {
  ['/homeCollapse'](req, res) {
    const query = req.query;
    const id = query.id;

    setTimeout(() => {
      res.json(getCollapse(id));
    }, 1000);
  },
  
}
