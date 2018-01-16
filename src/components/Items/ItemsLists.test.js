import React from 'react';

import ItemList from './ItemsList';
import { testItems } from '../../helpers/testValues';

describe('Itemlists tests', () => {
  let functionCall = false;
  function shallowItemList(items) {
    const props = {
      items,
      currentModal: { is0pen: true, message: 'Are you sure' },
      buyItem: () => {
        functionCall = true;
      },
      deleteModal: () => {
        functionCall = true;
      },
    };
    return shallow(<ItemList {...props} />);
  }

  const wrapper = shallowItemList(testItems);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render 3 card elements for all the items', () => {
    expect(wrapper.find('Card')).toHaveLength(3);
  });

  it('renders bought ui distinction', () => {
    expect(wrapper.find('Chip')).toHaveLength(1);
  });

  it('renders modal', () => {
    expect(wrapper.find('ModalDialog')).toHaveLength(1);
  })

  it('buyItem function call', () => {
    wrapper
      .find('FlatButton')
      .first()
      .simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });

  it('deleteModal function call', () => {
    wrapper
      .find('RaisedButton')
      .first()
      .simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });

  const emptyShoppinglistWrapper = shallowItemList({});
  it('renders empty dashboard', () => {
    expect(emptyShoppinglistWrapper).toHaveLength(1);
  });
});
