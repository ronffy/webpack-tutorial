import { createBrowserHistory } from 'history';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const history = createBrowserHistory();

const middleware = applyMiddleware(
  thunkMiddleware,
  routerMiddleware(history),
);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;

export {
  history
}
