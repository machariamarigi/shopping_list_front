import React from 'react';

import Navigation from './Navigation';

describe('Navigation tests', () => {
  let functionCall = false;
  function shallowNavigation(auth) {
    const props = {
      authenticated: auth,
      user: { username: 'TestUser' },
    };
    return shallow(<Navigation {...props} />);
  }

  const wrapper = shallowNavigation(false);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

});
