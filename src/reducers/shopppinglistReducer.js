import _ from 'lodash';
import * as types from '../actions/actionTypes';

const shoppinglists = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SHOPPINGLISTS_SUCCESS:
      return _.mapKeys(action.response.shoppinglists, 'uuid');
    case types.FETCH_A_SHOPPINGLIST_SUCCESS:
      return { ...state, [action.response.shoppinglist.uuid]: action.response.shoppinglist };
    case types.ADD_SHOPPINGLIST_REQUEST:
      return { addingShoppinglist: true };
    case types.ADD_SHOPPINGLIST_SUCCESS:
      return { addingShoppinglist: false };
    case types.ADD_SHOPPINGLIST_FAILURE:
      return { addingShoppinglist: false };
    case types.EDIT_SHOPPINGLIST_REQUEST:
      return { editingShoppinglist: true };
    case types.DELETE_SHOPPINGLIST_SUCCESS:
      return _.omit(state, action.id);
    default:
      return state;
  }
};

const gettingShoppinglists = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SHOPPINGLISTS_REQUEST:
      return true;
    case types.FETCH_SHOPPINGLISTS_SUCCESS:
      return false;
    case types.FETCH_SHOPPINGLISTS_FAILURE:
      return false;
    default:
      return state;
  }
};

const ShoppinglistReducer = {
  shoppinglists,
  gettingShoppinglists,
};

export default ShoppinglistReducer;
