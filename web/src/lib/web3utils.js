// ethjs wrap
import Eth from 'ethjs';

let web3 = null;
let accounts = [];
let waitForReceipt = undefined;

if (typeof window.web3 !== 'undefined') {
  // get ethjs object
  web3 = new Eth(window.web3.currentProvider);

  // get accounts
  web3.accounts().then(accs => {
    accounts = accs;
  });

  // execute the given callback when the transaction is complete
  // credit https://programtheblockchain.com/posts/2017/12/13/building-decentralized-apps-with-ethereum-and-javascript/
  waitForReceipt = function(hash, cb) {
    web3.getTransactionReceipt(hash).then(result => {
      if (result !== null) {
        // Transaction went through
        if (cb) {
          cb(result);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    }).catch(err => {
      console.error(err);
    });
  }
} else {
  console.error('No web3? You should consider trying MetaMask!');
}

export {
  accounts,
  waitForReceipt,
  web3
}
