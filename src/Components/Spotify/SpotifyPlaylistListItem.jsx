import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const SpotifyPlaylistListItem = ({ playlist }) => {
  useEffect(() => {
    if (playlist.images.length === 0) {
      console.log(playlist);
    }
  }, [playlist]);

  return (
    <Card>
      {playlist.images && playlist.images[0] && playlist.images[0].url &&
        <Card.Img variant="top" src={playlist.images[0].url}></Card.Img>
      }
      <Card.Header>{playlist.name}</Card.Header>
    </Card>
  );
};

SpotifyPlaylistListItem.propTypes = {
  playlist: PropTypes.any,
};

export default SpotifyPlaylistListItem;