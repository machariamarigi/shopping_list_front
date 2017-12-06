import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { getUser } from './actions/authActions';

const middleware = applyMiddleware(thunk);

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(middleware));

  const token = localStorage.getItem('authorization');

  if (token) {
    store.dispatch(getUser());
  }
  return store;
};

export default configureStore;
