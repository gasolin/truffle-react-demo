import {
  CLEAR_STATUS,
  UPDATE_STATUS
} from './types';

/**
 * Create an action to clear status.
 * @param {boolean} payload
 */
export function clearStatus () {
  return {
    type: CLEAR_STATUS,
  };
}

/**
 * Create an action to update status.
 * @param {boolean} payload
 */
export function updateStatus (payload) {
  return {
    type: UPDATE_STATUS,
    payload
  };
}
