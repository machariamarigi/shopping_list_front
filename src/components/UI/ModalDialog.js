import React from 'react';
import Dialog from 'material-ui/Dialog';

/**
 * Modal dialog to pop up for confirmatory actions based of different
 * contexts like deleting a shopping list or an item.
 */

const ModalDialog = (props) => {
  const {
    context, actions, open, message,
  } = props;
  return (
    <Dialog title={context} actions={actions} open={open}>
      {message}
    </Dialog>
  );
};

export default ModalDialog;
