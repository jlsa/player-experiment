import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Login = ({ token }) => {
  return (
    <a 
      className="btn btn-primary" 
      href="/auth/login"
    >
      <FontAwesomeIcon icon={faSpotify} />
      <span>{token ? ' Reconnect' : ' Connect'}</span>
    </a>
  );
}

export default Login;