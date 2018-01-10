import * as types from '../actions/actionTypes';

/**
 * Reducer that handles state of getting a user
 * @param {Object} state used to show the state of the application in regards to getting a user
 * @param {Object} action used to return different pieces of state based on the action type
 */
const gettingUser = (state = false, action = {}) => {
  switch (action.type) {
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

/**
 * Reducer that handles state of a user
 * @param {Object} state used to show the state of the application in regards to a user
 * @param {Object} action used to return different pieces of state based on the action type
 */
const user = (state = {}, action = {}) => {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return action.response.user;
    default:
      return state;
  }
};

/**
 * Reducer that handles state of a authentication
 * @param {Object} state used to show the state of the application in regards to authentication
 * @param {Object} action used to return different pieces of state based on the action type
 */
const auth = (state = {}, action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, authenticated: false };
    case types.LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case types.LOGIN_FAILURE:
      return { ...state, authenticated: false };
    case types.GET_USER_REQUEST:
      return { ...state, authenticated: true };
    case types.GET_USER_SUCCESS:
      return { ...state, authenticated: true };
    case types.GET_USER_FAILURE:
      return { ...state, authenticated: false };
    case types.LOGOUT_REQUEST:
      return { ...state, authenticated: false };
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
