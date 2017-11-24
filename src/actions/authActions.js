import * as types from './actionTypes';
import alertActions from './alertActions';
import authService from '../services/authService';

export function register(user, callback) {
  const request = () => ({ type: types.REGISTER_REQUEST });
  const success = response => ({ type: types.REGISTER_SUCCESS, response });
  const failure = error => ({ type: types.REGISTER_FAILURE, error });
  return (dispach) => {
    dispach(request());

    authService.register(user).then(
      (response) => {
        dispach(success(response));
        callback('/login');
        dispach(alertActions.success(response.message));
      },
      (error) => {
        dispach(failure(error));
        dispach(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function login({ email, password }, callback) {
  const request = () => ({ type: types.LOGIN_REQUEST });
  const success = response => ({ type: types.LOGIN_SUCCESS, response });
  const failure = error => ({ type: types.LOGIN_FAILURE, error });
  return (dispach) => {
    dispach(request(email));

    authService.login(email, password).then(
      (response) => {
        dispach(success(response));
        dispach(alertActions.success(response.message));
        dispach(getUser())
        callback('/dashboard');
      },
      (error) => {
        dispach(failure(error));
        dispach(alertActions.error(error.response.data.message));
        localStorage.clear()
      },
    );
  };
}

export function getUser() {
  const request = () => ({ type: types.GET_USER_REQUEST });
  const success = response => ({ type: types.GET_USER_SUCCESS, response });
  const failure = error => ({ type: types.GET_USER_FAILURE, error });

  return (dispach) => {
    dispach(request());

    authService.getUser().then((response) => {
      dispach(success(response));
    }, (error) => {
      dispach(failure(error));
      dispach(alertActions.error(error.response.data.message));
    });
  };
}
