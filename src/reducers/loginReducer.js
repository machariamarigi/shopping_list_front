import * as types from '../actions/actionTypes';

const loggingIn = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return true;
    case types.LOGIN_SUCCESS:
      return false;
    case types.LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};


export default loggingIn;
