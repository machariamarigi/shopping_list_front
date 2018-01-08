import React from 'react';

import { registrationFormExports } from './RegistrationForm';

const { mapStateToProps, RegistrationForm, validate } = registrationFormExports;

describe('Tests for RegistrationForm component', () => {
  function shallowRegistration(registering) {
    const props = {
      registering,
      handleSubmit: () => null,
    };
    return shallow(<RegistrationForm {...props} />);
  }

  const wrapper = shallowRegistration(true);
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('maps state to props', () => {
    const state = {
      registration: {
        registering: true,
      },
    };

    const expected = {
      registering: true,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('test validate', () => {
    const values = {
      password: 'de',
      confirmPassword: 'def',
    };

    const errors = {
      password: 'Must match confirm password',
      confirmPassword: 'Must match password',
    };

    expect(validate(values)).toEqual(errors);
  });
});
