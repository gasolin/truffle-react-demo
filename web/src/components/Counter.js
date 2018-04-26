import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { CONTRACT_ADDRESS } from '../constants';
import CONTRACT_JSON from '../lib/contracts/Counter.json';
import { updateStatus } from '../state/status/actions';
import {
  accounts,
  waitForReceipt,
  web3
} from '../lib/web3utils';

export class Counter extends Component{
  static get propTypes() {
    return {
      msg: PropTypes.string,
      style: PropTypes.string,
      updateStatus: PropTypes.func.isRequred
    }
  }

  constructor(props) {
    super(props);
    this.counter = web3.contract(CONTRACT_JSON.abi).at(CONTRACT_ADDRESS);

    this.state = {
      count: 0
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentWillMount() {
    this.event = this.counter.EvtIncrement();
    this.event.new();
    this.event.watch((err, result) => {
      if (err) {
        console.error(err);
      }
      if (result[0]) {
        console.log('update !!!');
        this.getCount();
      }
    });
    this.getCount();
  }

  getCount() {
    this.counter.getCount().then(result => {
      console.log(result[0].words[0]);
      this.setState({count: result[0].words[0]})
    });
  }

  componentWillUnmount() {
    this.event.uninstall();
  }

  onClickHandler (evt) {
    this.counter.increment({
      from: accounts[0],
      data: ''
    }).then(hash => {
      console.log('Transaction hash', hash);
      this.props.updateStatus({style: 'warning', msg: 'Transaction succeeded.'});
      waitForReceipt(hash, () => {
        console.log('Transaction succeeded.');
        this.props.updateStatus({style: 'success', msg: 'Transaction succeeded.'});
      });
    }).catch(err => {
      console.error(err);
      this.props.updateStatus({style: 'danger', msg: 'Transaction failed.'});
    });
  }

  render () {
    return (
      <header className="App-header">
        <h1 className="App-title">Counter</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.onClickHandler}>+1</button>
      </header>
    );
  }
}

function mapState (state) {
  return {
    web3: state.web3,
  };
}

function mapDispatch (dispatch) {
  return {
    updateStatus: (payload) => dispatch(updateStatus(payload))
  };
}

export default connect(mapState, mapDispatch)(Counter);
