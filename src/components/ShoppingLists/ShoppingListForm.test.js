import React from 'react';

import { ShoppinglistForm } from './ShoppingListForm';

describe('Tests for ItemForm', () => {
  function shallowForm(context) {
    const props = {
      context,
      handleSubmit: () => null,
      addingShoppinglist: true,
      editingShoppinglist: true,
    };
    return shallow(<ShoppinglistForm {...props} />);
  }

  const wrapper = shallowForm('Add');
  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders', () => {
    expect(wrapper.find('img')).toHaveLength(2);
  });
});
