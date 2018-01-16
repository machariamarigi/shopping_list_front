import * as types from '../actions/actionTypes';


/**
 * Reducer that returns the logging in status of the application
 * @param {Boolean} state used to show the state of the application in regards to logging in
 * @param {Object} action used to return different pieces of state based on the action type
 */
const loggingIn = (state = false, action = {}) => {
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
