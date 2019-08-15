import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import createAppReducer, { AppState } from './app';
import personal, { PersonalState } from './personal';
import home, { HomeState } from './home';

export type RootState = {
  router: RouterState
  app: AppState
  personal: PersonalState
  home: HomeState
} 

export default (history: History) => {
  const router = connectRouter(history);
  const app = createAppReducer(history);
  
  return combineReducers<RootState>({
    router,
    app,
    personal,
    home,
  });
}
