import * as types from './actionTypes';
import alertActions from './alertActions';
import itemService from '../services/itemService';

export function addItem(id, { name, quantity }, callback) {
  const request = () => ({ type: types.ADD_ITEM_REQUEST });
  const success = response => ({ type: types.ADD_ITEM_SUCCESS, response });
  const failure = error => ({ type: types.ADD_ITEM_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    itemService.addItem(id, name, quantity).then(
      (response) => {
        dispatch(success(response));
        callback();
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
