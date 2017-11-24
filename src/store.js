import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { getUser } from './actions/authActions';

const middleware = applyMiddleware(thunk, logger);

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(middleware));

  store.dispatch(getUser());

  return store;
};

export default configureStore;
