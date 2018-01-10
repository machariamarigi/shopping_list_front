import * as types from '../actions/actionTypes';

/**
 * Reducer the handles the registration state of the application
 * @param {Object} state used to show the state of the application in regards to registration
 * @param {Object} action used to return different pieces of state based on the action type
 */
const registration = (state = {}, action = {}) => {
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
