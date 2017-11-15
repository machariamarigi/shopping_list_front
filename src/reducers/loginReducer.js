import * as types from '../actions/actionTypes';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case types.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};

export default authentication;
