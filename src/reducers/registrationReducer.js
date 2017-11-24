import * as types from '../actions/actionTypes';

const registration = (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { ...state, registering: true };
    case types.REGISTER_SUCCESS:
      return { ...state, registering: false };
    case types.REGISTER_FAILURE:
      return { ...state, registering: false };
    default:
      return state;
  }
};

export default registration;
