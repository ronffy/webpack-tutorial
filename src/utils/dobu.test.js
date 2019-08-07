
const { dobu, subscribe, SUBSCRIBE_ERROR_MSG } = require('./dobu');

// import doIt from './doIt';

describe('测试 utils', () => {

  beforeAll(() => {
    console.log('beforeAll');
  })

  test('dobu', () => {
    const result = dobu('ronffy');
    expect(result).toEqual('doit-ronffy');
    expect(result).toHaveLength(11);
  })


  test('subscribe', () => {
   
    const listener = function () { }
    const listeners = [];

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

