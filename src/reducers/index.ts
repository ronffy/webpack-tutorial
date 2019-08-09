import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';
import personal from './personal';

export default combineReducers({
  routing: routerReducer,
  app,
  personal,
})
