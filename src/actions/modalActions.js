import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export function showModal(message, id) {
  return {
    type: SHOW_MODAL,
    message,
    id,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
