import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const history = createBrowserHistory();

const middleware = applyMiddleware(
  thunkMiddleware,
  routerMiddleware(history),
);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
