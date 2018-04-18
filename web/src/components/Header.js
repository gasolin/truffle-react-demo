import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Badge,
  Navbar,
  NavbarBrand
} from 'reactstrap';
import Status from './Status'

export function Header (props) {
  return (
    <Fragment>
      <Navbar color='dark' dark expand='lg'>
        <NavbarBrand href='#'>Program the Blockchain <Badge color='info'>Demo</Badge>
        </NavbarBrand>
      </Navbar>
      <Status/>
    </Fragment>
  );
}

Header.propTypes = {
  web3: PropTypes.object
};

function mapState (state) {
  return {
    web3: state.web3.web3,
  };
}

function mapDispatch (dispatch) {
  return {};
}

export default connect(mapState, mapDispatch)(Header);
