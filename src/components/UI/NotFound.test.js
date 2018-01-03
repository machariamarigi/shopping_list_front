import React from 'react';

import Notfound from './NotFound';

describe('NotFound tests', () => {
  const wrapper = shallow(<Notfound />);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders 404 card', () => {
    expect(wrapper.find('.not-found').length).toBe(1);
  });
});
