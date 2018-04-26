import {
  CLEAR_STATUS,
  UPDATE_STATUS
} from './types';

const initialState = {
  style: '',
  msg: ''
};

export function statusReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        ...state,
        style: action.payload.style,
        msg: action.payload.msg
      };
    case CLEAR_STATUS:
      return {
        ...state,
        style: '',
        msg: ''
      }
    default:
      return state;
  }
}

export default statusReducer;
