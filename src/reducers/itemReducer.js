import _ from 'lodash';
import * as types from '../actions/actionTypes';

const items = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ITEM_REQUEST:
      return { addingItem: true };
    case types.ADD_ITEM_SUCCESS:
      return { addingItem: false };
    case types.ADD_ITEM_FAILURE:
      return { addingItem: false };
    default:
      return state;
  }
};

export default items;
