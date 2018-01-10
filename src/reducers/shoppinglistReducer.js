import _ from 'lodash';
import * as types from '../actions/actionTypes';

/**
 * Reducer that handles all the state of the shoppinglist object
 * @param {Object} state used to show the state of the application in regards to shoppinglists
 * @param {Object} action used to return different pieces of state based on the action type
 */
const shoppinglists = (state = {}, action = {}) => {
  switch (action.type) {
    case types.FETCH_SHOPPINGLISTS_SUCCESS:
      // use lodash to map through the shoppinglists array and and produce an object with all the 
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

/**
 * Reducer that handles the state of deleting a shopping list
 * @param {Object} state used to show the state of the application in regards to deleting a 
 * shoppinglist
 * @param {Object} action used to return different pieces of state based on the action type
 */
const deletingShoppinglist = (state = false, action = {}) => {
  switch (action.type) {
    case types.DELETE_SHOPPINGLIST_REQUEST:
      return true;
    case types.DELETE_SHOPPINGLIST_SUCCESS:
      return false;
    case types.DELETE_SHOPPINGLIST_FAILURE:
      return false;
    default:
      return state;
  }
};

/**
 * Reducer that handles the state of getting shopping lists
 * @param {Object} state used to show the state of the application in regards to shoppinglists
 * @param {Object} action used to return different pieces of state based on the action type
 */
const gettingShoppinglists = (state = {}, action = {}) => {
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

/**
 * Reducer that handles the state of pagintion in the application
 * @param {Object} state used to show the state of the application in regards to pagination
 * @param {Object} action used to return different pieces of state based on the action type
 */
const shoppingPagination = (
  state = { nextPage: 1, hasNextPage: false, hasPreviousPage: false },
  action = {},
) => {
  switch (action.type) {
    case types.SET_NEXT_PAGE:
      return {
        ...state,
        nextPage: action.currentPage,
      };
    case types.HAS_NEXT:
      return {
        ...state,
        hasNextPage: action.hasNextPage,
      };
    case types.SET_PREVIOUS_PAGE:
      return {
        ...state,
        previousPage: action.currentPage,
      };
    case types.HAS_PREVIOUS:
      return {
        ...state,
        hasPreviousPage: action.hasPreviousPage,
      };
    default:
      return state;
  }
};

const ShoppinglistReducer = {
  shoppinglists,
  gettingShoppinglists,
  shoppingPagination,
  deletingShoppinglist,
};

export default ShoppinglistReducer;
