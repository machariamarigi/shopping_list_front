import React from 'react';

import { ItemForm } from './ItemForm';

describe('Tests for ItemForm', () => {
  function shallowForm(context) {
    const props = {
      context,
      handleSubmit: () => null,
      addingItem: true,
      editingItem: true,
    };
    return shallow(<ItemForm {...props} />);
  }

  const addWrapper = shallowForm('Add');
  it('renders', () => {
    expect(addWrapper).toHaveLength(1);
  });

  it('renders', () => {
    expect(addWrapper.find('img')).toHaveLength(2);
  });
});
