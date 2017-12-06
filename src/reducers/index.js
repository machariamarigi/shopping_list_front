import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registration from './registrationReducer';
import alert from './alertReducer';
import loggingIn from './loginReducer';
import ShoppinglistReducer from './shopppinglistReducer';
import UserReducer from './userReducer';
import ItemsReducer from './itemReducer';

const { shoppinglists, gettingShoppinglists } = ShoppinglistReducer;
const { user, gettingUser, auth } = UserReducer;
const { items, gettingItems } = ItemsReducer;
export default combineReducers({
  form: formReducer,
  registration,
  alert,
  loggingIn,
  gettingUser,
  auth,
  user,
  shoppinglists,
  gettingShoppinglists,
  items,
  gettingItems,
});
