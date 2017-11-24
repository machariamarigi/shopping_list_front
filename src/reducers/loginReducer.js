import * as types from '../actions/actionTypes';

const authentication = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        authenticated: true,
        loggingIn: false,
      };
    case types.LOGIN_FAILURE:
      return {
        authenticated: false,
        loggingIn: false,
      };
    default:
      return state;
  }
};

export default authentication;
