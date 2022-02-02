import React from 'react';
import PropTypes from 'prop-types';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

const Login = ({ token }) => {
  return (
    <Button
      variant={token ? 'danger' : 'success'}
      onClick={() => {
        window.location.href = './auth/login';
      }}
    >
      <FontAwesomeIcon icon={faSpotify} />
      <span>{token ? ' Reconnect' : ' Connect'}</span>
    </Button>
  );
};

Login.propTypes = {
  token: PropTypes.any
};

export default Login;