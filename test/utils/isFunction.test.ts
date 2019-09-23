
import isFunction from '../../src/utils/isFunction';
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
} from '../../src/config/jest';



test('test utils isFunction', () => {
  expect(isFunction(fn)).toBeTruthy();
  expect(isFunction(asyncFn)).toBeTruthy();
  expect(isFunction(generator)).toBeTruthy();

  expect(isFunction(string)).toBeFalsy();
  expect(isFunction(number)).toBeFalsy();
  expect(isFunction(array)).toBeFalsy();
  expect(isFunction(object)).toBeFalsy();
  expect(isFunction(_null)).toBeFalsy();
  expect(isFunction(_undef)).toBeFalsy();
  expect(isFunction(proxy)).toBeFalsy();
  expect(isFunction(promise)).toBeFalsy();
  expect(isFunction(symbol)).toBeFalsy();
})