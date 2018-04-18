import { combineReducers } from 'redux';
import { web3Reducer } from './web3';
import { statusReducer } from './status';

export default combineReducers({
  web3: web3Reducer,
  status: statusReducer
});
