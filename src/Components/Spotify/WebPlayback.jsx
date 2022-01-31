import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Alert, Card, Container, Toast, Row } from 'react-bootstrap';

const track = {
    name: '',
    album: {
        images: [
            { url: '' }
        ]
    },
    artists: [
        { name: '' }
    ]
};

const WebPlayback = ({ token }) => {
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [current_track, setTrack] = useState(track);

  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://sdk.scdn.co/spotify-player.js';
  script.async = true;

  document.body.appendChild(script);

  window.onSpotifyWebPlaybackSDKReady = () => {

    const player = new window.Spotify.Player({
      name: 'Josaho Web Playback SDK',
      getOAuthToken: cb => { cb(token); },
      volume: 1.0
    });

    setPlayer(player);

    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    player.addListener('player_state_changed', ( state => {
      if (!state) {
        return;
      }

      setTrack(state.track_window.current_track);
      setPaused(state.paused);

      player.getCurrentState().then(state => !state ? setActive(false) : setActive(true));
    }));

    player.connect();

    };
  }, []);

  if (!is_active) { 
    return (
      <>
        <Container>
          <Toast bg='dark'>
            <Toast.Header>
            <FontAwesomeIcon icon={faSpotify} className='spotify-brand me-2'/>
            {/* <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' /> */}
            <strong className='me-auto'>{' '}Spotify</strong>
            <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className={'text-white'}>Transfer your playback using your Spotify app</Toast.Body>
          </Toast>
          <Alert variant='warning'>
            <Alert.Heading>
            <FontAwesomeIcon icon={faSpotify} className='spotify-brand'/>
            {' '}Instance not active
            </Alert.Heading>
            <hr/>
            <p>Transfer your playback using your Spotify app</p>
          </Alert>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Row>
            <Card>
              <Card.Img variant='top' src={current_track.album.images[0].url} />
            </Card>
          </Row>
        </Container>
        <div className='container'>
          <div className='main-wrapper'>

          <img src={current_track.album.images[0].url} className='now-playing__cover' alt='' />

          <div className='now-playing__side'>
          <div className='now-playing__name'>{current_track.name}</div>
          <div className='now-playing__artist'>{current_track.artists[0].name}</div>

          <button className='btn-spotify' onClick={() => { player.previousTrack() }} >
              &lt;&lt;
          </button>

          <button className='btn-spotify' onClick={() => { player.togglePlay() }} >
              { is_paused ? 'PLAY' : 'PAUSE' }
          </button>

          <button className='btn-spotify' onClick={() => { player.nextTrack() }} >
              &gt;&gt;
          </button>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default WebPlayback
