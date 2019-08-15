import { History } from 'history';
import extendReducer from './extendReducer';
import { Reducer } from 'redux';
import { Action } from '../config/types';

const namespace = 'app';

export type AppState = {
  login: boolean
  menus: []
  menuOpenKeys: string[]
  menuSelectedKeys: string[]
}

export default (history: History) => {
  const pathname = history.location.pathname;
  const initState: AppState = {
    login: false,
    menus: [],
    menuOpenKeys: [],
    menuSelectedKeys: [pathname]
  };

  const reducer: Reducer<AppState, Action> = (state = initState, { payload, type }) => {
    switch (type) {
      case 'APP_LOGIN':
        return {
          ...state,
          login: payload.login
        };

      case 'APP_UPDATESTATE':
        return {
          ...state,
          ...payload
        }

      default:
        return state;
    }
  }
  return extendReducer(reducer, namespace);
};
