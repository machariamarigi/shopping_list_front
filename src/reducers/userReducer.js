import * as types from '../actions/actionTypes';

const gettingUser = (state = false, action) => {
  switch (action.tyoe) {
    case types.GET_USER_REQUEST:
      return true;
    case types.GET_USER_SUCCESS:
      return false;
    case types.GET_USER_FAILURE:
      return false;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return action.response.user;
    default:
      return state;
  }
};

const auth = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case types.LOGIN_FAILURE:
      return { ...state, authenticated: false };
    case types.GET_USER_SUCCESS:
      return { ...state, authenticated: true };
    default:
      return state;
  }
};

const UserReducer = {
  user,
  auth,
  gettingUser,
};

export default UserReducer;
