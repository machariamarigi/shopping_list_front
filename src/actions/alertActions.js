import { SUCCESS, ERROR, CLEAR } from './actionTypes';

function success(message) {
  return { type: SUCCESS, message };
}

function error(message) {
  return { type: ERROR, message };
}

function clear() {
  return { type: CLEAR };
}

const alertActions = {
  success,
  error,
  clear,
};

export default alertActions;
