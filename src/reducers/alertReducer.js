import { SUCCESS, ERROR, CLEAR } from '../actions/actionTypes';

/**
 * Reducer used to show alert messages raised in the application
 * @param {Object} state used to show the state of the application in regards to alerts
 * @param {Object} action used to return different pieces of state based on the action type
 */
function alert(state = {}, action = {}) {
  switch (action.type) {
    case SUCCESS:
      return {
        message: action.message,
      };
    case ERROR:
      return {
        message: action.message,
      };
    case CLEAR:
      return {};
    default:
      return state;
  }
}

export default alert;
