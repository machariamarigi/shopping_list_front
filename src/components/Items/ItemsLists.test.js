import React from 'react';

import ItemList from './ItemsList';
import { testItems } from '../../helpers/testValues';

describe('Itemlists tests', () => {
  let functionCall = false;
  function shallowItemList() {
    const props = {
      items: testItems,
      currentModal: { is0pen: true, message: 'Are you sure' },
      buyItem: () => {
        functionCall = true;
      },
    };
    return shallow(<ItemList {...props} />);
  }

  const wrapper = shallowItemList();

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render 3 card elements for all the items', () => {
    expect(wrapper.find('Card')).toHaveLength(3);
  })

  it('', () => {
    wrapper.find('FlatButton').first().simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });
});
