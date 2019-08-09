
import subscribe from '../src/utils/subscribe';

test('test utils subscribe', () => {

  const listener = function () { }
  const listeners: (typeof listener)[] = [];

  const unsubscribe = subscribe(listener, listeners);
  expect(listeners.indexOf(listener))
    .toBe(listeners.length - 1);

  unsubscribe();
  expect(listeners.includes(listener))
    .toBeFalsy();
})