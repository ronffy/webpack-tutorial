import { AxiosResponse } from 'axios';
import { requestCollapse } from '../servers/home';
import { Dispatch } from 'redux';
import { Action } from '../config/types';

export const createRequestCollapse = (id: string | number) => (disptch: Dispatch<Action>) =>
  requestCollapse(id)
    .then((res: AxiosResponse) => {
      const { status, statusText } = res;
      const { data, code, message } = res.data;

      if (status !== 200) {
        return disptch({
          type: 'home/updateState',
          payload: {
            error: statusText,
            collapseList: []
          }
        })
      }
      if (code !== 0 || !Array.isArray(data)) {
        return disptch({
          type: 'home/updateState',
          payload: {
            error: message,
            collapseList: []
          }
        })
      }

      return disptch({
        type: 'home/updateState',
        payload: {
          error: null,
          collapseList: data
        }
      })

    })
    .catch(() => {
      return disptch({
        type: 'home/updateState',
        payload: {
          error: 'error',
          collapseList: []
        }
      })
    })

function requestCollapseLoading(loading: boolean) {
  return {
    type: 'home/updateState',
    payload: {
      loading
    }
  }
}

createRequestCollapse.loading = requestCollapseLoading;

