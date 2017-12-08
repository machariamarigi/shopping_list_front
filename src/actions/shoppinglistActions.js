import * as types from './actionTypes';
import alertActions from './alertActions';
import shoppinglistService from '../services/shoppinglistService';

export function fetchShoppinglists(pageNumber, searchTerm) {
  const request = () => ({ type: types.FETCH_SHOPPINGLISTS_REQUEST });
  const success = response => ({ type: types.FETCH_SHOPPINGLISTS_SUCCESS, response });
  const failure = error => ({ type: types.FETCH_SHOPPINGLISTS_FAILURE, error });
  return (dispatch) => {
    dispatch(request());

    shoppinglistService.fetchShoppinglists(pageNumber, searchTerm).then(
      (response) => {
        dispatch(success(response));
        if (response.next_page !== null) {
          dispatch({ type: types.HAS_NEXT, hasNextPage: true });
          dispatch({ type: types.SET_NEXT_PAGE, currentPage: pageNumber + 1 });
        } else {
          dispatch({ type: types.HAS_NEXT, hasNextPage: false });
        }
        if (response.previous_page !== null) {
          dispatch({ type: types.HAS_PREVIOUS, hasPreviousPage: true });
          dispatch({ type: types.SET_PREVIOUS_PAGE, currentPage: pageNumber - 1 });
        } else {
          dispatch({ type: types.HAS_PREVIOUS, hasPreviousPage: false });
        }
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
        callback('/dashboard');
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
        callback('/dashboard');
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
        dispatch(fetchShoppinglists(1, null));
      },
      (error) => {
        dispatch(failure(error));
      },
    );
  };
}
