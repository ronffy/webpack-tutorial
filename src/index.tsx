
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { apis } from './config';
import C3 from './C3';
import { UUU } from './utils/doIt';
import './index.less';


let u = new UUU();
// console.log('u.doit', u.doit());
// console.log('u.doit2', UUU.doit2());


if (module.hot) {
  module.hot.accept('./a', function () {

  })
}

ReactDOM.render(
  <C3 />,
  document.getElementById('root')
)



async function getData() {
  let result = await fetch(apis.api1);
  result = await result.json();
  return result;
}

getData().then(data => {
  console.log('data', data);
})

async function getData2() {
  let result = await axios(`${apis.api2}?count=3`);
  return result.data
}

getData2().then(data => {
  console.log('data2', data);
})


async function getData3() {
  let result = await axios(apis.api3, {
    method: 'POST',
    data: {
      count: 6
    }
  });
  return result.data
}

getData3().then(data => {
  console.log('data3', data);
})


