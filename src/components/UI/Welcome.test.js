import React from 'react';

import Welcome from './Welcome';

describe('Welcome tests', () => {
  const wrapper = shallow(<Welcome />);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders image', () => {
    expect(wrapper.find('img').length).toBe(1);
  });
});
