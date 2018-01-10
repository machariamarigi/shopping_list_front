import { Reducer } from 'redux-testkit';

import alert from './alertReducer';
import { SUCCESS, ERROR, CLEAR } from '../actions/actionTypes';

describe('tests for the alert reducer', () => {
  const message = 'test action message';

  it('return an empty object', () => {
    expect(alert()).toEqual({});
  });

  it('should not affect state', () => {
    Reducer(alert)
      .expect({ type: 'NOT_EXISTING' })
      .toReturnState({});
  });

  it('show success message', () => {
    const action = { type: SUCCESS, message };
    Reducer(alert)
      .expect(action)
      .toReturnState({ message });
  });

  it('show error message', () => {
    const action = { type: ERROR, message };
    Reducer(alert)
      .expect(action)
      .toReturnState({ message });
  });

  it('clear messages', () => {
    const action = { type: CLEAR, message };
    Reducer(alert)
      .expect(action)
      .toReturnState({});
  });
});
