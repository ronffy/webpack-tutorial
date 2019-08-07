

export { default as doIt } from './doIt';
import { apis } from '../config';


async function getData(count) {
  let result = await fetch(apis.api1, {
    count,
  });
  result = await result.json();
  return result;
}

export {
  getData
}