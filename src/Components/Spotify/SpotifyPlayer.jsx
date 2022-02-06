import React from 'react';
import { useEffect, useState } from 'react';
import Login from './Login';
import WebPlayback from './WebPlayback';

const SpotifyPlayer = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('spotify-token'));
  }, []);

  if (token) {
    return (
      <WebPlayback />
    );
  } else {
    return (
      <Login />
    );
  }
};

export default SpotifyPlayer;