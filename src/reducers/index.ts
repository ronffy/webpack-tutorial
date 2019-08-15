import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import createAppReducer, { AppState } from './app';
import personal, { PersonalState } from './personal';

export type RootState = {
  router: RouterState;
  app: AppState;
  personal: PersonalState;
} 

export default history => {
  const router = connectRouter(history);
  const app = createAppReducer(history);
  
  return combineReducers<RootState>({
    router,
    app,
    personal,
  });
}
