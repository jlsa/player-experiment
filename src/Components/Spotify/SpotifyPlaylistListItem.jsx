import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Badge, Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

const SpotifyPlaylistListItem = ({ playlist }) => {
  // const userId = '1170108177';
  const defaultCover = 'https://via.placeholder.com/640?text=Cover+Unavailable';
  const [playlistCover, setPlaylistCover] = useState(defaultCover);
  useEffect(() => {
    console.log(playlist);
    if (playlist.images.length !== 0) {
      setPlaylistCover(playlist.images[0].url);
    }
  }, [playlist]);

  return (
    <Card className={'shadow-sm'}>
      {<Card.Img src={playlistCover}/>}
      <ListGroup className='flush'>
        <ListGroupItem key={0}>
          <em>Tracks</em>: <strong>{playlist.tracks.total}</strong>
        </ListGroupItem>
        <ListGroupItem key={1}>
          <em>Title</em>: <strong>{playlist.name}</strong>
        </ListGroupItem>
      </ListGroup>

      <Card.Footer className='d-flex justify-content-between align-items-center'>
        <ButtonGroup>
          <Button variant='outline-secondary'>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <Button variant='outline-secondary'>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </ButtonGroup>
        <Badge>
          By {playlist.owner.display_name}
        </Badge>
      </Card.Footer>
    </Card>
  );
};

SpotifyPlaylistListItem.propTypes = {
  playlist: PropTypes.any,
};

export default SpotifyPlaylistListItem;