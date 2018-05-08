import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middlewares from '../middlewares';
import { setPages } from '../actions';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middlewares),
);

const pages = [
  {
    name: 'home',
  }, {
    name: 'main',
  }, {
    name: 'contacts'
  }
];

store.dispatch(setPages(pages));

export default store;
