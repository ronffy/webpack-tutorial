
let preApi = 'https://www.production.com';

if (process.env.NODE_ENV === 'development') {
  preApi = '/api';
}

const apis = {
  preApi,
  api1: `${preApi}/web/users1`,
  api2: `${preApi}/app/users2`,
  api3: `${preApi}/app/users3`,
  homeCollapse: `${preApi}/homeCollapse`,
}

export default apis;
