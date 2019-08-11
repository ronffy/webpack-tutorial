import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import createAppReducer from './app';
import personal from './personal';

export default history => {
  const router = connectRouter(history);
  const app = createAppReducer(history);
  
  return combineReducers({
    router,
    app,
    personal,
  });
}
