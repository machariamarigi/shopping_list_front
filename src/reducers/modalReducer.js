import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';

/**
 * Reducer that handles the state of our models i.e whether the modal is showing and the message in 
 * the modal
 * @param {Object} state used to show the state of the application in regards to modals
 * @param {Object} action used to return different pieces of state based on the action type
 */
const modals = (state = { isOpen: false, message: '' }, action = {}) => {
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
