import React, { useState, useEffect } from 'react';

const WebPlayback = ({ token }) => {
  return (
    <div>hallooo, {token}</div>
  );
}

export default WebPlayback;
// const WebPlayback = ({ token }) => {
//   const [player, setPlayer] = useState(undefined);

//   useEffect (() => {
//     const script = document.createElement('script');
//     script.src = process.env.SPOTIFY_PLAYER_SCRIPT_SRC;
//     script.async = true;

//     document.body.appendChild(script);
    
//     window.onSpotifyWebPlaybackSDKReady = () => {

//       const player = new window.Spotify.Player({
//         name: 'Josaho Playback Web-App',
//         getOAuthToken: cb => { cb(token); },
//         volume: 0.5
//       });

//       setPlayer(player);
      
//       player.addListener('ready', ({ device_id }) => {
//         console.log('Ready with Device ID', device_id);
//       });

//       player.addListener('not_ready', ({ device_id }) => {
//         console.log('Device ID has gone offline', device_id);
//       });

//       player.connect();
//     }
//   }, []);

//   return (
//     <>
//       <div className='container'>
//         <div className='main-wrapper'>

//         </div>
//       </div>
//     </>
//   )
// }

export default WebPlayback;