import _ from 'lodash';
import * as types from '../actions/actionTypes';

/**
 * Reducer used to add Items or an Item to state of the application
 * @param {Object} state used to show the state of the application in regards to items
 * @param {Object} action used to return different pieces of state based on the action type
 */
const items = (state = {}, action = {}) => {
  switch (action.type) {
    case types.ADD_ITEM_REQUEST:
      return { addingItem: true };
    case types.ADD_ITEM_SUCCESS:
      return { addingItem: false };
    case types.ADD_ITEM_FAILURE:
      return { addingItem: false };
    case types.FETCH_ITEMS_SUCCESS:
      return _.mapKeys(action.response.items, 'uuid');
    case types.FETCH_AN_ITEM_SUCCESS:
      return { ...state, [action.response.item.uuid]: action.response.item };
    case types.DELETE_ITEM_SUCCESS:
      return _.omit(state, action.itId);
    default:
      return state;
  }
};

/**
 * Reducer used to handle async fetching of items
 * @param {Boolean} state used to show the state of the application in regards to getting items
 * @param {Object} action used to return different pieces of state based on the action type
 */
const gettingItems = (state = false, action = {}) => {
  switch (action.type) {
    case types.FETCH_ITEMS_REQUEST:
      return true;
    default:
      return state;
  }
};

const deletingItems = (state = false, action) => {
  switch (action.type) {
    case types.DELETE_ITEM_REQUEST:
      return true;
    case types.DELETE_ITEM_SUCCESS:
      return false;
    case types.DELETE_ITEM_FAILURE:
      return false;
    default:
      return state;
  }
};

const ItemReducer = {
  items,
  gettingItems,
  deletingItems,
};

export default ItemReducer;
