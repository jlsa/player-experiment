import React from 'react';
import playlists from './playlists.json'

const SpotifyPlaylists = () => {
  const playLists = playlists.body.items;
  return (
    <ul>
      {playLists.map((playlist, index) => {
        return <li key={index}>{playlist.name} - {playlist.id}</li>
      })}
    </ul>
  )
}
export default SpotifyPlaylists;