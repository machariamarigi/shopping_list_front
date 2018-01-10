import { Reducer } from 'redux-testkit';

import registration from './registrationReducer';
import * as types from '../actions/actionTypes';

describe('Tests for registration reducer', () => {
  it('return an empty object', () => {
    expect(registration()).toEqual({});
  });

  it('test registration request', () => {
    const action = { type: types.REGISTER_REQUEST };

    Reducer(registration)
      .expect(action)
      .toReturnState({ registering: true });
  });

  it('test registration success', () => {
    const action = { type: types.REGISTER_SUCCESS };

    Reducer(registration)
      .expect(action)
      .toReturnState({ registering: false });
  });

  it('test registration failure', () => {
    const action = { type: types.REGISTER_FAILURE };

    Reducer(registration)
      .expect(action)
      .toReturnState({ registering: false });
  });
});
