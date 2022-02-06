import React, { useState, useEffect } from 'react';
// import WebPlayback from './WebPlayback';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import SpotifyPlaylists from './SpotifyPlaylists';
import IconButton from '../Ui/IconButton';
import { ButtonGroup, Row } from 'react-bootstrap';

const storeToken = (token) => {
  localStorage.setItem('spotify-token', token);
};

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
    <Container fluid className='p-3 spotify-container'>
      {/* <div>
        <a className="btn-spotify" href="/auth/get-user-playlists">Get User&lsquo;s Playlists</a>
      </div> */}
      <Row className='mb-3'>
        <ButtonGroup>
          {<Login token={token} />}
          {token && (
            <IconButton
              variant={'primary'}
              onCustomClick={() => {
                console.log('hi');
              }}
            >Get playlists</IconButton>
          )}
        </ButtonGroup>
      </Row>
      <Row>
        {token && (
          <>
            {/* <WebPlayback token={token} /> */}
            <SpotifyPlaylists />
          </>
        )}
      </Row>
    </Container>
  );
};

export default Spotify;