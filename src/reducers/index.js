import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registration from './registrationReducer';
import alert from './alertReducer';
import loggingIn from './loginReducer';
import ShoppinglistReducer from './shoppinglistReducer';
import UserReducer from './userReducer';
import ItemsReducer from './itemReducer';
import modals from './modalReducer';

const {
  shoppinglists,
  gettingShoppinglists,
  shoppingPagination,
  deletingShoppinglist,
} = ShoppinglistReducer;
const { user, gettingUser, auth } = UserReducer;
const { items, gettingItems, deletingItems } = ItemsReducer;
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
  shoppingPagination,
  items,
  gettingItems,
  deletingShoppinglist,
  modals,
  deletingItems,
});
