import { SUCCESS, ERROR, CLEAR } from '../actions/actionTypes';

function alert(state = {}, action) {
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
