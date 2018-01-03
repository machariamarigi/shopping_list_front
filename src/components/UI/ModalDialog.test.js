import React from 'react';

import ModalDialog from './ModalDialog';

describe('Modal dialog tests', () => {
  function shallowModalDialog() {
    const props = {
      open: true,
      message: 'Are you sure',
    };
    return shallow(<ModalDialog {...props} />);
  }

  it('renders', () => {
    const wrapper = shallowModalDialog();
    expect(wrapper).toHaveLength(1);
  });
});
