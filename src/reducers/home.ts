import { ReactNode } from 'react';
import extendReducer from './extendReducer';
import { Reducer } from 'redux';
import { Action } from '../config/types';

const namespace = 'home';

interface CollapseItem {
  id: string | number
  title: string | ReactNode
  content: string | ReactNode
}

export type HomeState = {
  collapseList: CollapseItem[]
}

const initState = {
  collapseList: [],
};

const reducer: Reducer<HomeState, Action> = (state = initState, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default extendReducer<HomeState>(reducer, namespace);
