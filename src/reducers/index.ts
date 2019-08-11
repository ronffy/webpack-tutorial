import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';
import personal from './personal';

export default history => combineReducers({
  router: connectRouter(history),
  app,
  personal,
});
