import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { clearStatus } from '../actions';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.props.clearStatus();
  }

  render() {
    return this.props.msg ? (
      <Alert color={this.props.style} toggle={this.onDismiss}>
        {this.props.msg}
      </Alert>
    ) : '';
  }
}

Status.propTypes = {
  msg: PropTypes.string,
  style: PropTypes.string
};

function mapState (state) {
  return {
    msg: state.status.msg,
    style: state.status.style
  };
}

function mapDispatch (dispatch) {
  return {
    clearStatus: () => dispatch(clearStatus())
  };
}

export default connect(mapState, mapDispatch)(Status);
