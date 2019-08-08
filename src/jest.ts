

const _null = null;
const _undef = undefined;
const number = 6;
const string = '6';
const array = [];
const object = {};
const fn = function () { }
const asyncFn = async function () { }
const promise = Promise.resolve();
const promiseResolve = Promise.resolve();
const promiseReject = Promise.reject();
const proxy = new Proxy({}, {});
const symbol = Symbol('x');
const generator = function* () { }


export {
  fn,
  asyncFn,
  number,
  string,
  array,
  object,
  _null,
  _undef,
  promise,
  promiseResolve,
  promiseReject,
  proxy,
  symbol,
  generator,
}