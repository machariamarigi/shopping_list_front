import { Reducer } from 'redux-testkit';

import userReducer from './userReducer';
import * as types from '../actions/actionTypes';
import { testUser } from '../helpers/testValues';

describe('Test user reducers', () => {
  const { gettingUser, user, auth } = userReducer;

  it('returns false', () => {
    expect(gettingUser()).toEqual(false);
  });

  it('get user request', () => {
    const action = {
      type: types.GET_USER_REQUEST,
    };
    Reducer(gettingUser)
      .expect(action)
      .toReturnState(true);
  });

  it('get user success', () => {
    const action = {
      type: types.GET_USER_SUCCESS,
    };
    Reducer(gettingUser)
      .expect(action)
      .toReturnState(false);
  });

  it('get user failure', () => {
    const action = {
      type: types.GET_USER_FAILURE,
    };
    Reducer(gettingUser)
      .expect(action)
      .toReturnState(false);
  });

  it('adds user to state', () => {
    const action = {
      type: types.GET_USER_SUCCESS,
      response: {
        user: testUser,
      },
    };
    Reducer(user)
      .expect(action)
      .toReturnState(testUser);
  });

  it('login request', () => {
    const action = {
      type: types.LOGIN_REQUEST,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: false });
  });

  it('login success', () => {
    const action = {
      type: types.LOGIN_SUCCESS,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: true });
  });

  it('login failure', () => {
    const action = {
      type: types.LOGIN_FAILURE,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: false });
  });

  it('get user request', () => {
    const action = {
      type: types.GET_USER_REQUEST,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: true });
  });

  it('get user success', () => {
    const action = {
      type: types.GET_USER_SUCCESS,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: true });
  });

  it('get user failure', () => {
    const action = {
      type: types.GET_USER_FAILURE,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: false });
  });

  it('logout request', () => {
    const action = {
      type: types.LOGOUT_REQUEST,
    };

    Reducer(auth)
      .expect(action)
      .toReturnState({ authenticated: false });
  });
});
