import { Reducer } from 'redux-testkit';
import _ from 'lodash';

import ItemsReducer from './itemReducer';
import * as types from '../actions/actionTypes';
import { testItemsArray, testItems, testItem } from '../helpers/testValues';

describe('Tests for the Items reducer', () => {
  const { items, gettingItems, deletingItems } = ItemsReducer;

  it('return an empty object', () => {
    expect(items()).toEqual({});
  });

  it('should not affect state', () => {
    Reducer(items)
      .expect({ type: 'NOT_EXISTING' })
      .toReturnState({});
  });

  it('add item request', () => {
    const action = { type: types.ADD_ITEM_REQUEST };
    Reducer(items)
      .expect(action)
      .toReturnState({ addingItem: true });
  });

  it('add item success', () => {
    const action = { type: types.ADD_ITEM_SUCCESS };
    Reducer(items)
      .expect(action)
      .toReturnState({ addingItem: false });
  });

  it('add item failure', () => {
    const action = { type: types.ADD_ITEM_FAILURE };
    Reducer(items)
      .expect(action)
      .toReturnState({ addingItem: false });
  });

  it('fetch items success', () => {
    const action = {
      type: types.FETCH_ITEMS_SUCCESS,
      response: {
        items: testItemsArray,
      },
    };
    Reducer(items)
      .expect(action)
      .toReturnState(testItems);
  });

  it('fetch an item success', () => {
    const action = {
      type: types.FETCH_AN_ITEM_SUCCESS,
      response: {
        item: testItem,
      },
    };
    Reducer(items)
      .expect(action)
      .toReturnState({ [action.response.item.uuid]: testItem });
  });

  it('test getting items', () => {
    const action = {
      type: types.FETCH_ITEMS_REQUEST,
    };
    Reducer(gettingItems)
      .expect(action)
      .toReturnState(true);
  });

  it('test deleting items request', () => {
    const action = {
      type: types.DELETE_ITEM_REQUEST,
    };
    Reducer(deletingItems)
      .expect(action)
      .toReturnState(true);
  });

  it('test deleting items success', () => {
    const action = {
      type: types.DELETE_ITEM_SUCCESS,
    };
    Reducer(deletingItems)
      .expect(action)
      .toReturnState(false);
  });

  it('test deleting items failure', () => {
    const action = {
      type: types.DELETE_ITEM_FAILURE,
    };
    Reducer(deletingItems)
      .expect(action)
      .toReturnState(false);
  });
});
