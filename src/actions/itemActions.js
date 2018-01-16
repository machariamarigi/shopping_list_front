import * as types from './actionTypes';
import alertActions from './alertActions';
import itemService from '../services/itemService';

export function addItem(id, { name, quantity }) {
  const request = () => ({ type: types.ADD_ITEM_REQUEST });
  const success = response => ({ type: types.ADD_ITEM_SUCCESS, response });
  const failure = error => ({ type: types.ADD_ITEM_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    itemService.addItem(id, name, quantity).then(
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

export function fetchItems(id) {
  const request = () => ({ type: types.FETCH_ITEMS_REQUEST });
  const success = response => ({ type: types.FETCH_ITEMS_SUCCESS, response });
  const failure = error => ({ type: types.FETCH_ITEMS_FAILURE, error });
  return (dispatch) => {
    dispatch(request());
    itemService.fetchItems(id).then(
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

export function fetchItem(shId, itId) {
  const request = () => ({ type: types.FETCH_AN_ITEM_REQUEST });
  const success = response => ({ type: types.FETCH_AN_ITEM_SUCCESS, response });
  const failure = error => ({ type: types.FETCH_AN_ITEM_FAILURE, error });

  return (dispatch) => {
    dispatch(request());
    itemService.fetchItem(shId, itId).then(
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

export function buyItem(shId, itId) {
  const request = () => ({ type: types.BUY_ITEM_REQUEST });
  const success = response => ({ type: types.BUY_ITEM_SUCCESS, response });
  const failure = error => ({ type: types.BUY_ITEM_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    itemService.buyItem(shId, itId).then(
      (response) => {
        dispatch(success(response));
        dispatch(fetchItems(shId));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function editItem(shId, itId, { name, quantity }) {
  const request = () => ({ type: types.EDIT_ITEM_REQUEST });
  const success = response => ({ type: types.EDIT_ITEM_SUCCESS, response });
  const failure = error => ({ type: types.EDIT_ITEM_FAILURE, error });

  return (dispatch) => {
    dispatch(request());
    itemService.editItem(shId, itId, name, quantity).then(
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

export function deleteItem(shId, itId) {
  const request = () => ({ type: types.DELETE_ITEM_REQUEST });
  const success = () => ({ type: types.DELETE_ITEM_SUCCESS, itId });
  const failure = error => ({ type: types.DELETE_ITEM_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    itemService.deleteItem(shId, itId).then(
      () => {
        dispatch(success());
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}
