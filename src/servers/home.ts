import axios, { AxiosPromise } from 'axios';
import apis from '../config/apis';

export function requestCollapse(id: string | number): AxiosPromise {
  return axios(apis.homeCollapse, {
    data: {
      id
    }
  })
}

