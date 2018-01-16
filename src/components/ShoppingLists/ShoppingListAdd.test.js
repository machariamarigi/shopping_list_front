import React from 'react';

import { shoppingListAddExports } from './ShoppingListAdd';

const { ShoppingListAdd, mapStateToProps } = shoppingListAddExports;

describe('Tests for ShoppingListAdd component', () => {
  function shallowAdd(addingShoppinglist) {
    const props = {
      addingShoppinglist,
    };
    return shallow(<ShoppingListAdd {...props} />);
  }

  const wrapper = shallowAdd(true);
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('maps state to props', () => {
    const state = {
      shoppinglists: {
        addingShoppinglist: true,
      },
    };

    const expected = {
      addingShoppinglist: true,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
