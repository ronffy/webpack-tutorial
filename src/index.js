
import React from 'react';
import axios from 'axios';
import { apis } from './config';
import './index.less';

if (module.hot) {
  module.hot.accept('./a.js', function () {

  })
}



document.getElementById('root').onclick = function () {
  Promise.all([import('./a.js'), import('./b.js')]).then(([a, b]) => {
    console.log('111', a.f1(4));
    console.log('222', b.default(5));
  })

}



let b = React.createElement(
  <div className="img" id="root">
    <image src="../assets/right.png" />
  </div>
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


