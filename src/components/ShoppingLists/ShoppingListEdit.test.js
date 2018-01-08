import React from 'react';

import { shoppingListEditExports } from './ShoppingListEdit';
import { testShoppinglist, testShoppinglists } from '../../helpers/testValues';

const { ShoppingListEdit, mapStateToProps } = shoppingListEditExports;

describe('Tests for ItemAdd component', () => {
  function shallowShoppingEdit(editingShoppinglist) {
    const props = {
      shoppinglist: testShoppinglist,
      editingShoppinglist,
      match: { params: { shId: 1, itId: 1 } },
      fetchShoppinglist: () => null,
      onSubmit: () => null,
    };
    return shallow(<ShoppingListEdit {...props} />);
  }

  const wrapper = shallowShoppingEdit(true);
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('maps state to props', () => {
    const state = {
      editingShoppinglist: true,
      shoppinglists: testShoppinglists,
    };

    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    };

    const expected = {
      editingShoppinglist: true,
      shoppinglist: testShoppinglist,
    };

    expect(mapStateToProps(state, ownProps)).toEqual(expected);
  });
});
