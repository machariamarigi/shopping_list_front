import React from 'react';

import Navigation from './Navigation';
import { testUser } from '../../helpers/testValues';

describe('Navigation tests', () => {
  let functionCall = false;
  function shallowNavigation(auth) {
    const props = {
      authenticated: auth,
      user: testUser,
    };
    return shallow(<Navigation {...props} />);
  }

  const wrapper = shallowNavigation(false);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

});
