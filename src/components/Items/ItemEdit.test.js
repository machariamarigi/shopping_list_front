import React from 'react';

import { itemEditExports } from './ItemEdit';
import { testItem, testItems } from '../../helpers/testValues';

const { ItemEdit, mapStateToProps } = itemEditExports;

describe('Tests for ItemEdit component', () => {
  function shallowItemAdd(addingItem) {
    const props = {
      item: testItem,
      addingItem,
      match: { params: { shId: 1, itId: 1 } },
      fetchItem: () => null,
      onSubmit: () => null,
    };
    return shallow(<ItemEdit {...props} />);
  }

  const wrapper = shallowItemAdd(true);
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('maps state to props', () => {
    const state = {
      editingItem: true,
      items: testItems,
    };

    const ownProps = {
      match: {
        params: {
          itId: 1,
        },
      },
    };

    const expected = {
      editingItem: true,
      item: testItem,
    };

    expect(mapStateToProps(state, ownProps)).toEqual(expected);
  });
});
