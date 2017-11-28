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

export const random = 1;
