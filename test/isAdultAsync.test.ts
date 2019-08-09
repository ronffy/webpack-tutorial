
import isAdultAsync from '../src/utils/isAdultAsync';

test('use callback test utils isAdult', (done) => {
  function trueCallback(result: boolean) {
    expect(result).toBeTruthy();
    done();
  }
  function falseCallback(result: boolean) {
    expect(result).toBeFalsy();
    done();
  }

  isAdultAsync(20, trueCallback);
  isAdultAsync(12, falseCallback);
})


