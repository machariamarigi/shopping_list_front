import React from 'react';

import ShoppingLists from './ShoppingLists';
import { testShoppinglists } from '../../helpers/testValues';

describe('Shoppinglists tests', () => {
  let functionCall = false;
  function shallowShoppingLists(shoppinglists) {
    const props = {
      shoppinglists,
      currentModal: { is0pen: false, message: 'Are you sure' },
      deleteModal: () => {
        functionCall = true;
      },
      onNextPage: () => {
        functionCall = true;
      },
      onPreviousPage: () => {
        functionCall = true;
      },
      clickShoppinglist: () => {
        functionCall = true;
      },
      hasNextPage: true,
      hasPreviousPage: true,
    };
    return shallow(<ShoppingLists {...props} />);
  }

  const wrapper = shallowShoppingLists(testShoppinglists);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render 3 card elements for all the items', () => {
    expect(wrapper.find('Card')).toHaveLength(3);
  });

  it('renders modal', () => {
    expect(wrapper.find('ModalDialog')).toHaveLength(1);
  });

  it('deleteModal function call', () => {
    wrapper
      .find('RaisedButton')
      .first()
      .simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });
  it('onPreviousPage function call', () => {
    wrapper.find('.prev').simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });
  it('onNextPage function call', () => {
    wrapper.find('.next').simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });
  it('onNextPage function call', () => {
    wrapper
      .find('CardHeader')
      .first()
      .simulate('click', { persist() {} });
    expect(functionCall).toBe(true);
  });

  const emptyShoppinglistWrapper = shallowShoppingLists({});
  it('renders empty shoppinglist', () => {
    expect(emptyShoppinglistWrapper).toHaveLength(1);
  });
});
