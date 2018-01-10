import { Reducer } from 'redux-testkit';

import shoppinglistReducer from './shoppinglistReducer';
import * as types from '../actions/actionTypes';
import { testShoppinglistsArray, testShoppinglists, testShoppinglist } from '../helpers/testValues';

describe('Tests for the shoppinglist reducers', () => {
  const {
    shoppinglists,
    deletingShoppinglist,
    gettingShoppinglists,
    shoppingPagination,
  } = shoppinglistReducer;

  it('return an empty object', () => {
    expect(shoppinglists()).toEqual({});
  });

  it('fetch shoppinglists success', () => {
    const action = {
      type: types.FETCH_SHOPPINGLISTS_SUCCESS,
      response: {
        shoppinglists: testShoppinglistsArray,
      },
    };
    Reducer(shoppinglists)
      .expect(action)
      .toReturnState(testShoppinglists);
  });

  it('fetch a shoppinglist success', () => {
    const action = {
      type: types.FETCH_A_SHOPPINGLIST_SUCCESS,
      response: {
        shoppinglist: testShoppinglist,
      },
    };
    Reducer(shoppinglists)
      .expect(action)
      .toReturnState({ [action.response.shoppinglist.uuid]: testShoppinglist });
  });

  it('adding a shoppinglist request', () => {
    const action = {
      type: types.ADD_SHOPPINGLIST_REQUEST,
    };
    Reducer(shoppinglists)
      .expect(action)
      .toReturnState({ addingShoppinglist: true });
  });

  it('adding a shoppinglist success', () => {
    const action = {
      type: types.ADD_SHOPPINGLIST_SUCCESS,
    };
    Reducer(shoppinglists)
      .expect(action)
      .toReturnState({ addingShoppinglist: false });
  });

  it('adding a shoppinglist failure', () => {
    const action = {
      type: types.ADD_SHOPPINGLIST_FAILURE,
    };
    Reducer(shoppinglists)
      .expect(action)
      .toReturnState({ addingShoppinglist: false });
  });

  it('editing a shoppinglist request', () => {
    const action = {
      type: types.EDIT_SHOPPINGLIST_REQUEST,
    };
    Reducer(shoppinglists)
      .expect(action)
      .toReturnState({ editingShoppinglist: true });
  });

  it('deleting a shoppinglist request', () => {
    const action = {
      type: types.DELETE_SHOPPINGLIST_REQUEST,
    };
    Reducer(deletingShoppinglist)
      .expect(action)
      .toReturnState(true);
  });

  it('deleting a shoppinglist success', () => {
    const action = {
      type: types.DELETE_SHOPPINGLIST_SUCCESS,
    };
    Reducer(deletingShoppinglist)
      .expect(action)
      .toReturnState(false);
  });

  it('deleting a shoppinglist failure', () => {
    const action = {
      type: types.DELETE_SHOPPINGLIST_FAILURE,
    };
    Reducer(deletingShoppinglist)
      .expect(action)
      .toReturnState(false);
  });

  it('getting shoppinglists request', () => {
    const action = {
      type: types.FETCH_SHOPPINGLISTS_REQUEST,
    };
    Reducer(gettingShoppinglists)
      .expect(action)
      .toReturnState(true);
  });

  it('getting shoppinglists success', () => {
    const action = {
      type: types.FETCH_SHOPPINGLISTS_SUCCESS,
    };
    Reducer(gettingShoppinglists)
      .expect(action)
      .toReturnState(false);
  });

  it('getting shoppinglists failure', () => {
    const action = {
      type: types.FETCH_SHOPPINGLISTS_FAILURE,
    };
    Reducer(gettingShoppinglists)
      .expect(action)
      .toReturnState(false);
  });

  const state = {
    nextPage: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  };
  it('returns initial pagination state', () => {
    expect(shoppingPagination()).toEqual(state);
  });

  it('sets next page', () => {
    const action = {
      type: types.SET_NEXT_PAGE,
      currentPage: 2,
    };
    Reducer(shoppingPagination)
      .expect(action)
      .toReturnState({ ...state, nextPage: 2 });
  });

  it('has next page', () => {
    const action = {
      type: types.HAS_NEXT,
      hasNextPage: true,
    };
    Reducer(shoppingPagination)
      .expect(action)
      .toReturnState({ ...state, hasNextPage: true });
  });

  it('sets previous page', () => {
    const action = {
      type: types.SET_PREVIOUS_PAGE,
      currentPage: 2,
    };
    Reducer(shoppingPagination)
      .expect(action)
      .toReturnState({ ...state, previousPage: 2 });
  });

  it('has previous page', () => {
    const action = {
      type: types.HAS_PREVIOUS,
      hasPreviousPage: true,
    };
    Reducer(shoppingPagination)
      .expect(action)
      .toReturnState({ ...state, hasPreviousPage: true });
  });
});
