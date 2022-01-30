import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import { Button, Container } from 'react-bootstrap';
import SpotifyPlaylists from './SpotifyPlaylists';

const storeToken = (token) => {
  localStorage.setItem('spotify-token', token);
}

const Spotify = () => {
  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
      storeToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <Container className="p-3 spotify-container">
      <div><strong>Token</strong>: <span>{token}</span></div>
      <div>
        <a className="btn-spotify" href="/auth/get-user-playlists">Get User's Playlists</a>
      </div>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
        {token && <SpotifyPlaylists />}
    </Container>
  );
}

export default Spotify;