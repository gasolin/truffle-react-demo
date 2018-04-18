import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Eth from 'ethjs';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import { configureStore } from './configureStore';
import { updateWeb3Status } from './actions';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore()
let web3 = undefined;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();

window.addEventListener('load', () => {
  let hasWeb3 = typeof window.web3 !== 'undefined';
  web3 = hasWeb3 ? new Eth(window.web3.currentProvider) : null;
  store.dispatch(updateWeb3Status(web3));
});
