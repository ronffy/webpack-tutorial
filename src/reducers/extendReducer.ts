import { Reducer } from 'redux';
import { Action } from '../config/types';

function extendReducer<S>(reducer: Reducer<S>) {
  const newReducer = (state: S, action: Action): S => {
    if (action.type === 'updateState') {
      return {
        ...state,
        ...action.payload
      }
    }
    return reducer(state, action);
  }
  return newReducer
}

export default extendReducer;
