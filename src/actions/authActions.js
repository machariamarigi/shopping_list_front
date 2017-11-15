import * as types from './actionTypes';
import alertActions from './alertActions';
import authService from '../services/authService';

export function register(user, callback) {
  const request = () => ({ type: types.REGISTER_REQUEST, user });
  const success = () => ({ type: types.REGISTER_SUCCESS, user });
  const failure = error => ({ type: types.REGISTER_FAILURE, error });
  return (dispach) => {
    dispach(request(user));

    authService.register(user).then(
      () => {
        dispach(success(user));
        callback('/login');
      },
      (error) => {
        dispach(failure(error));
        dispach(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function login({ email, password }) {
  const request = user => ({ type: types.LOGIN_REQUEST, user });
  const success = user => ({ type: types.LOGIN_SUCCESS, user });
  const failure = error => ({ type: types.LOGIN_FAILURE, error });
  return (dispach) => {
    dispach(request(email));

    authService.login(email, password).then(
      () => {
        dispach(success(email));
      },
      (error) => {
        dispach(failure(error));
        dispach(alertActions.error(error.response.data.message));
      },
    );
  };
}
