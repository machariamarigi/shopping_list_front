import React from 'react';

import Loader from './Loader';

describe('Modal dialog tests', () => {
  function shallowLoader() {
    const props = {
      segments: 20,
    };
    return mount(<Loader {...props} />);
  }
  it('renders', () => {
    const wrapper = shallowLoader()
    expect(wrapper).toHaveLength(1);
  });
});