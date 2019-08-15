
import { RootState } from '../reducers';
import { Action } from 'redux';

export type RootState = RootState

export interface Action extends Action {
  payload: any
}
