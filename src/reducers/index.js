import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registration from './registrationReducer';
import alert from './alertReducer';
import authentication from './loginReducer'

export default combineReducers({
  form: formReducer,
  registration,
  alert,
  authentication,
});
