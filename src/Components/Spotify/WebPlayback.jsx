import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Alert, Card, ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

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

const WebPlayback = () => {
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
      const token = localStorage.getItem('spotify-token');
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
      <Alert variant='warning'>
        <Alert.Heading>
          <FontAwesomeIcon icon={faSpotify} className='spotify-brand'/>
          {' '}Instance not active
        </Alert.Heading>
        <hr/>
        <p>Transfer your playback using your Spotify app</p>
      </Alert>
    );
  } else {
    return (
      <Card>
        <Card.Img variant='top' src={current_track.album.images[0].url} />
        <Card.Header>{current_track.name}</Card.Header>
        <Card.Body>
          {current_track.artists[0].name}
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            <Button
              onClick={() => { player.previousTrack(); }}
            ><FontAwesomeIcon icon={faStepBackward} /></Button>
            <Button
              onClick={() => { player.togglePlay(); }}
            ><FontAwesomeIcon icon={is_paused ? faPlay : faPause} /></Button>
            <Button
              onClick={() => { player.nextTrack(); }}
            ><FontAwesomeIcon icon={faStepForward} /></Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    );
  }
};

WebPlayback.propTypes = {
  token: PropTypes.string
};

export default WebPlayback;
