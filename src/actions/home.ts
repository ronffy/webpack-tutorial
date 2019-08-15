import { AxiosResponse } from 'axios';
import { requestCollapse } from '../servers/home';
import { Dispatch } from 'redux';
import { Action } from '../config/types';

export function createRequestCollapse(id: string | number) {
  return (disptch: Dispatch<Action>) => requestCollapse(id)
    .then((res: AxiosResponse) => {
      const { status, statusText } = res;
      const { data, code, message } = res.data;

      if (status !== 200) {
        return disptch({
          type: 'error',
          payload: statusText
        })
      }
      if (code !== 0 || !Array.isArray(data)) {
        return disptch({
          type: 'error',
          payload: message
        })
      }

      return disptch({
        type: 'home/updateState',
        payload: {
          collapseList: data
        }
      })

    })
}

