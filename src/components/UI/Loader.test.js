import React from 'react';

import Loader from './Loader';

describe('Loader tests', () => {
  function mountLoader() {
    const props = {
      segments: 20,
    };
    return mount(<Loader {...props} />);
  }
  it('renders', () => {
    const wrapper = mountLoader()
    expect(wrapper).toHaveLength(1);
  });
});