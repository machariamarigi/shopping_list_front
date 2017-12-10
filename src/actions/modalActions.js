import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export function showModal(message, shId, itId) {
  return {
    type: SHOW_MODAL,
    message,
    shId,
    itId,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
