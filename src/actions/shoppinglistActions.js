import * as types from './actionTypes';
import alertActions from './alertActions';
import shoppinglistService from '../services/shoppinglistService';

export function fetchShoppinglists() {
  const request = () => ({ type: types.FETCH_SHOPPINGLISTS_REQUEST });
  const success = response => ({ type: types.FETCH_SHOPPINGLISTS_SUCCESS, response });
  const failure = error => ({ type: types.FETCH_SHOPPINGLISTS_FAILURE, error });
  return (dispatch) => {
    dispatch(request());

    shoppinglistService.fetchShoppinglists().then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function fetchShoppinglist(id) {
  const request = () => ({ type: types.FETCH_A_SHOPPINGLIST_REQUEST });
  const success = response => ({ type: types.FETCH_A_SHOPPINGLIST_SUCCESS, response });
  const failure = error => ({ type: types.FETCH_A_SHOPPINGLIST_FAILURE, error });

  return (dispatch) => {
    dispatch(request());
    shoppinglistService.fetchShoppinglist(id).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function addShoppinglist({ name }, callback) {
  const request = () => ({ type: types.ADD_SHOPPINGLIST_REQUEST });
  const success = response => ({ type: types.ADD_SHOPPINGLIST_SUCCESS, response });
  const failure = error => ({ type: types.ADD_SHOPPINGLIST_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    shoppinglistService.addShoppinglist(name).then(
      (response) => {
        dispatch(success(response));
        callback('/dashboard');
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function editShoppinglist(id, { name }, callback) {
  const request = () => ({ type: types.ADD_SHOPPINGLIST_REQUEST });
  const success = response => ({ type: types.ADD_SHOPPINGLIST_SUCCESS, response });
  const failure = error => ({ type: types.ADD_SHOPPINGLIST_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    shoppinglistService.editShoppinglist(id, name).then(
      (response) => {
        dispatch(success(response));
        callback('/dashboard');
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function deleteShoppinglist(id) {
  const request = () => ({ type: types.DELETE_SHOPPINGLIST_REQUEST });
  const success = () => ({ type: types.DELETE_SHOPPINGLIST_SUCCESS, id });
  const failure = error => ({ type: types.DELETE_SHOPPINGLIST_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    shoppinglistService.deleteShoppinlist(id).then(
      () => {
        dispatch(success());
      },
      (error) => {
        dispatch(failure(error));
      },
    );
  };
}
