/**
 * mock 常用工具
 * @author ronffy
 */

function getRandomTimeout(min = 100, max = 1000) {
  return Math.ceil((Math.random() || 0.1) * (max / min)) * min;
}

const delay = timeout => new Promise(res => setTimeout(() => {
  res()
}, timeout))

exports.getRandomTimeout = getRandomTimeout;
exports.delay = delay;
