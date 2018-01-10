import { Reducer } from 'redux-testkit';

import loggingIn from './loginReducer';
import * as types from '../actions/actionTypes';

describe('Tests for the login reducer', () => {
  it('returns false', () => {
    expect(loggingIn()).toEqual(false);
  });

  it('logging request', () => {
    const action = { type: types.LOGIN_REQUEST };

    Reducer(loggingIn)
      .expect(action)
      .toReturnState(true);
  });

  it('logging success', () => {
    const action = { type: types.LOGIN_SUCCESS };

    Reducer(loggingIn)
      .expect(action)
      .toReturnState(false);
  });

  it('logging failure', () => {
    const action = { type: types.LOGIN_FAILURE };

    Reducer(loggingIn)
      .expect(action)
      .toReturnState(false);
  });
});
