import React from 'react';

import { loginFormExports } from './LoginForm';

const { LoginForm, mapStateToProps } = loginFormExports;

describe('Tests for LoginForm component', () => {
  function shallowLogin(loggingIn) {
    const props = {
      loggingIn,
      handleSubmit: () => null,
    };
    return shallow(<LoginForm {...props} />);
  }

  const wrapper = shallowLogin(true);
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('maps state to props', () => {
    const state = {
      loggingIn: true,
    };

    const expected = {
      loggingIn: true,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
