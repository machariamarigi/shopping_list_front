import * as types from './actionTypes';
import alertActions from './alertActions';
import authService from '../services/authService';

export function register(user, callback) {
  const request = () => ({ type: types.REGISTER_REQUEST });
  const success = response => ({ type: types.REGISTER_SUCCESS, response });
  const failure = error => ({ type: types.REGISTER_FAILURE, error });
  return (dispatch) => {
    dispatch(request());

    authService.register(user).then(
      (response) => {
        dispatch(success(response));
        callback('/login');
        dispatch(alertActions.clear());
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function login({ email, password }, callback) {
  const request = () => ({ type: types.LOGIN_REQUEST });
  const success = response => ({ type: types.LOGIN_SUCCESS, response });
  const failure = error => ({ type: types.LOGIN_FAILURE, error });
  return (dispatch) => {
    dispatch(request(email));

    authService.login(email, password).then(
      (response) => {
        dispatch(success(response));
        dispatch(alertActions.success(response.message));
        dispatch(getUser());
        callback('/dashboard');
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
        localStorage.clear();
      },
    );
  };
}

export function getUser() {
  const request = () => ({ type: types.GET_USER_REQUEST });
  const success = response => ({ type: types.GET_USER_SUCCESS, response });
  const failure = error => ({ type: types.GET_USER_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    authService.getUser().then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
        localStorage.removeItem('authorization');
      },
    );
  };
}

export function logout() {
  localStorage.removeItem('authorization');
  return { type: types.LOGOUT_REQUEST };
}
