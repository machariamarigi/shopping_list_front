import _ from 'lodash';
import * as types from '../actions/actionTypes';

const items = (state = { fetchingItems: false }, action) => {
  switch (action.type) {
    case types.ADD_ITEM_REQUEST:
      return { addingItem: true };
    case types.ADD_ITEM_SUCCESS:
      return { addingItem: false };
    case types.ADD_ITEM_FAILURE:
      return { addingItem: false };
    case types.FETCH_ITEMS_REQUEST:
      return { fetchingItems: true };
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

export default items;
