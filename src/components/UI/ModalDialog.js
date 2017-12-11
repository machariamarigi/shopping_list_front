import React from 'react';
import Dialog from 'material-ui/Dialog';

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
