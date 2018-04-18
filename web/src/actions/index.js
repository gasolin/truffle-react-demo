import {
  CLEAR_STATUS,
  UPDATE_STATUS,
  UPDATE_WEB3_STATUS
} from './actionTypes';

/**
 * Create an action to warn there is no web3 connection.
 * @param {boolean} payload
 */
export function updateWeb3Status (payload) {
  return {
    type: UPDATE_WEB3_STATUS,
    payload
  }
}

export function clearStatus() {
  return {
    type: CLEAR_STATUS,
  }
}

export function updateStatus(payload) {
  return {
    type: UPDATE_STATUS,
    payload
  }
}
