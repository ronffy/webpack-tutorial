
import isAdult, { isAdultSync } from './isAdult';

test('use async test isAdult', async () => {
  let result1 = await isAdult(20);
  expect(result1).toBeTruthy();

  let result2 = await isAdult(12);
  expect(result2).toBeFalsy();
})

test('use promise test isAdult', () => {
  isAdult(20).then(result => {
    expect(result).toBeTruthy();
  })

  isAdult(12).then(result => {
    expect(result).toBeFalsy();
  })
})

test('use callback test isAdult', (done) => {
  function trueCallback(result: boolean) {
    expect(result).toBeTruthy();
    done();
  }
  function falseCallback(result: boolean) {
    expect(result).toBeFalsy();
    done();
  }

  isAdultSync(20, trueCallback);
  isAdultSync(12, falseCallback);
})


