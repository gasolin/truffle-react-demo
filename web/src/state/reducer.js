import { combineReducers } from 'redux';
import { web3Reducer } from './web3/reducers';
import { statusReducer } from './status/reducers';

export default combineReducers({
  status: statusReducer,
  web3: web3Reducer
});
