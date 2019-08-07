
module.exports.dobu = function dobu(params) {
  return `doit-${params}`
}

module.exports.subscribe = function subscribe(listener, listeners) {
  if (typeof listener !== 'function') {
    throw new Error('Expected listener to be a function.');
  }

  let isSubscribed = true;
  listeners.push(listener);

  return function unsubscribe() {
    if (!isSubscribed) {
      return;
    }
    isSubscribed = false;

    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  }
}


module.exports.mockdata = function (count) {
  fetch('/web/users1', {
    count
  })
}
