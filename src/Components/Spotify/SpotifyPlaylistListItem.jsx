import { useEffect } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
  )
}

{/* <tr>
      <td>
        <Image thumbnail rounded fluid src={playlist.images[0].url} height={128} width={128} />
      </td>
      <td></td>
      <td>
        {playlist.tracks.total}
        </td>
      <td>View</td>
    </tr> */}

export default SpotifyPlaylistListItem;