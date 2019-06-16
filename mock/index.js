const Mock = require('mockjs');

function getUsers(count = 10) {
  return Mock.mock({
    [`data|${count}`]: [
      {
        'id|+1': 1,
        'name': '@cname',
        'email': '@email',
        'phone': /^1[34578]\d{9}$/,
        'website': '@domain',
        avatar: '@image("200x100", "@name")'
      }
    ]
  }).data;
}

module.exports = {
  ['get /web/users1']({ query }) {
    let count = 10; // 请求几条数据
    if (query && query.count) {
      count = query.count;
    }
    return getUsers(count);
  },
  ['/app/users2']({ query }) {
    let count = 10; // 请求几条数据
    if (query && query.count) {
      count = query.count;
    }
    return new Promise(res => {
      setTimeout(() => {
        res(getUsers(count))
      }, getRandomTimeout());
    })
  },
  async ['post /app/users3']({ body }) {
    await delay(getRandomTimeout());
    let count = 10; // 请求几条数据
    if (body && body.count) {
      count = body.count;
    }
    return getUsers(count);
  },
}


function getRandomTimeout(min = 100, max = 1000) {
  return Math.ceil((Math.random() || 0.1) * (max / min)) * min;
}

function delay(timeout) {
  return new Promise(res => {
    setTimeout(() => {
      res()
    }, timeout);
  })
}