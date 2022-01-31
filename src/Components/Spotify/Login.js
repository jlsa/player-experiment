import React from 'react';
import PropTypes from 'prop-types';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Login = ({ token }) => {
  return (
    <LinkContainer to='/auth/login'>
      <Button variant={token ? 'danger' : 'success'}>
        <FontAwesomeIcon icon={faSpotify} />
        <span>{token ? ' Reconnect' : ' Connect'}</span>
      </Button>
    </LinkContainer>
  );
};

Login.propTypes = {
  token: PropTypes.any
};

export default Login;