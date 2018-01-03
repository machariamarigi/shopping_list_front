import React from 'react';

import Search from './Search';

describe('NotFound tests', () => {
  let functionCall = false;
  function shallowSearch() {
    const props = {
      onSearchTermChange: (event) => {
        functionCall = true;
      },
    };
    return shallow(<Search {...props} />);
  }
  const wrapper = shallowSearch();

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('onSearchTermChange', () => {
    wrapper.find('TextField').simulate('change', { persist() {} });
    expect(functionCall).toBe(true);
  });
});
