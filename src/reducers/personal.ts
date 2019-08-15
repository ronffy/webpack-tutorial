import { ReactNode } from 'react';
import { Reducer } from 'redux';
import { Action } from '../config/types';
import extendReducer from './extendReducer';

const namespace = 'personal';

interface Tab {
  key: string
  tab: string
  content: string | ReactNode
}

export type PersonalState = {
  activeKey: string
  tabs: Tab[]
}

const initState = {
  activeKey: 'tab1',
  tabs: [
    {
      key: 'tab1',
      tab: 'tab标题1',
      content: 'tab内容1',
    },
    {
      key: 'tab2',
      tab: 'tab标题2',
      content: 'tab内容2',
    }
  ]
}

const reducer: Reducer<PersonalState, Action> = (state = initState, { payload, type }) => {
  switch (type) {
    case 'PERSONAL_ACTIVEKEY':
      return {
        ...state,
        activeKey: payload.activeKey
      };
  
    default:
      return state;
  }
};

export default extendReducer(reducer, namespace);
