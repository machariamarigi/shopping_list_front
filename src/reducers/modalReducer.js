import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';

const modals = (state = { isOpen: false, message: '' }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        id: action.id,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modals;
