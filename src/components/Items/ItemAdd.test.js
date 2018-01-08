import React from 'react';

import { itemAddExports } from './ItemAdd';

const { ItemAdd, mapStateToProps } = itemAddExports;

describe('Tests for ItemAdd component', () => {
  function shallowAdd(addingItem) {
    const props = {
      addingItem,
      match: { params: { id: 1 } },
    };
    return shallow(<ItemAdd {...props} />);
  }

  const wrapper = shallowAdd(true);
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('maps state to props', () => {
    const state = {
      items: {
        addingItem: true,
      },
    };

    const expected = {
      addingItem: true,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
