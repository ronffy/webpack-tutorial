const { defaultResult, Mock } = require('./_common')
const { delay, getRandomTimeout } = require('./_utils')

function getUsers(count = 10) {
  return Mock.mock({
    ...defaultResult,
    [`data|${count}`]: [
      {
        'id|+1': 1,
        'name': '@cname',
        'email': '@email',
        'phone': /^1[34578]\d{9}$/,
        'website': '@domain',
        'avatar': '@image("200x100", "@name")'
      }
    ]
  });
}

module.exports = {
  ['get /web/users1']({ params }) {
    let count = 10; // 请求几条数据
    if (params && params.count) {
      count = params.count;
    }
    return getUsers(count);
  },
  ['/app/users2']({ params }) {
    let count = 10; // 请求几条数据
    if (params && params.count) {
      count = params.count;
    }
    return new Promise(res => {
      setTimeout(() => {
        res(getUsers(count))
      }, getRandomTimeout());
    })
  },
  async ['post /app/users3']({ params }) {
    await delay(getRandomTimeout());
    let count = 10; // 请求几条数据
    if (params && params.count) {
      count = params.count;
    }
    return getUsers(count);
  },
}
