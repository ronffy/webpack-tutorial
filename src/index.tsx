
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { apis } from './config/config';
import App from './App';

ReactDOM.render(
  <App />,
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


