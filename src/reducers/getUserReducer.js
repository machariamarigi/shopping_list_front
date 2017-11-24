import * as types from '../actions/actionTypes';

const getUser = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        gettingUser: true,
        authenticated: false,
      };
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        gettingUser: false,
        user: action.response.user,
      });

    case types.GET_USER_FAILURE:
      return {
        gettingUser: false,
      };
    default:
      return state;
  }
};

export default getUser;
