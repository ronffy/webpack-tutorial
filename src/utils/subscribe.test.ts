
import subscribe from './subscribe';

describe('测试 utils', () => {

  beforeAll(() => {
    console.log('beforeAll');
  })

  test('subscribe', () => {
   
    const listener = function () { }
    const listeners: (typeof listener)[] = [];

    const unsubscribe = subscribe(listener, listeners);
    expect(listeners.indexOf(listener))
      .toBe(listeners.length - 1);

    unsubscribe();
    expect(listeners.includes(listener))
      .toBe(false);

  })


  afterAll(() => {
    console.log('afterAll');
  })

})

