import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = applyMiddleware(
  thunkMiddleware,
  routerMiddleware(history),
);

const store = createStore(createRootReducer(history), composeWithDevTools(middleware));

export default store;
