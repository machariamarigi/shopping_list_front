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

const authenticated = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return false;
    case types.GET_USER_SUCCESS:
      return true;
    case types.GET_USER_FAILURE:
      return false;
    default:
      return state;
  }
};

const UserReducer = {
  user,
  authenticated,
  gettingUser,
};

export default UserReducer;
