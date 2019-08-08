
import isObject from './isObject';
import {
  fn,
  asyncFn,
  number,
  string,
  array,
  object,
  _null,
  _undef,
  promise,
  proxy,
  symbol,
  generator,
} from '../jest';


test('test isObject', () => {
  expect(isObject(array)).toBeTruthy();
  expect(isObject(object)).toBeTruthy();
  expect(isObject(fn)).toBeTruthy();
  expect(isObject(asyncFn)).toBeTruthy();
  expect(isObject(generator)).toBeTruthy();
  expect(isObject(proxy)).toBeTruthy();
  expect(isObject(promise)).toBeTruthy();

  expect(isObject(string)).toBeFalsy();
  expect(isObject(number)).toBeFalsy();
  expect(isObject(_null)).toBeFalsy();
  expect(isObject(_undef)).toBeFalsy();
  expect(isObject(symbol)).toBeFalsy();
})
