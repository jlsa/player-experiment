import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import SpotifyPagination from './SpotifyPagination';
import SpotifyPlaylistListItem from './SpotifyPlaylistListItem';
import spotifyService from '../../Services/spotifyService';

const SpotifyPlaylists = () => {
  // const playLists = playlists.body.items;
  const [playLists, setPlaylists] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    retrieveFromApi();
  }, []);

  const retrieveFromApi = () => {
    async function getPlaylists() {
      const baseUrl = 'users/1170108177/playlists';
      spotifyService.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
        .then((response) => {
          setPlaylists(response.data.items);
          setHasNext(response.data.next ? true : false);
          setHasPrevious(response.data.previous ? true : false);
          setLimit(response.data.limit);  
          setTotal(response.data.total);
          setOffset(response.data.offset);
          console.log(response.data);
          console.log(playLists);
        })
        .catch(error => {
          console.log(error);
        });
    }

    getPlaylists();
  }

  useEffect(() => {
    console.log(offset);
    retrieveFromApi();
  }, [offset]);

  return (
    <>
      <SpotifyPagination 
        onPrevious={() => {
          setOffset(offset - limit)
        }}
        onNext={() => {
          setOffset(offset + limit)
        }}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        limit={limit}
        total={total}
        offset={offset}
      />
      <Row className="g-4" md={4}>
          {playLists.map((playlist, index) => {
            return (
              <Col key={index}>
                <SpotifyPlaylistListItem key={index} playlist={playlist} />
              </Col>
            )
          })}
      </Row>
      <SpotifyPagination 
        onPrevious={() => {
          setOffset(offset - limit)
        }}
        onNext={() => {
          setOffset(offset + limit)
        }}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        limit={limit}
        total={total}
        offset={offset}
      />
    </>
  )
}
export default SpotifyPlaylists;