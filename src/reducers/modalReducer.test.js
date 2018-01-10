import { Reducer } from 'redux-testkit';

import modal from './modalReducer';
import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';

describe('Tests for modal reducer', () => {
  const initialState = { isOpen: false, message: '' };
  it('returns the initial state', () => {
    expect(modal()).toEqual(initialState);
  });

  it('test showing of the modal', () => {
    const action = { type: SHOW_MODAL, message: 'test-message', id: 1 };
    Reducer(modal)
      .expect(action)
      .toReturnState({
        isOpen: true,
        message: action.message,
        id: action.id,
      });
  });

  it('test hiding of the modal', () => {
    const action = { type: HIDE_MODAL };
    Reducer(modal)
      .expect(action)
      .toReturnState({
        isOpen: false,
        message: '',
      });
  });
});
