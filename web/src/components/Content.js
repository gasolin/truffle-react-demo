import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

export function Content (props) {
  return(
    <div className="App-intro">
      <dl>
        <dt><Link to="/counter">Counter</Link></dt>
        <dd>Count and increment</dd>
      </dl>
    </div>
  )
}

Content.propTypes = {
};

export default injectIntl(Content);
