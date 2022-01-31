import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Spotify from './Components/Spotify/Spotify';

const App = () => (
  <Container fluid>
    <Spotify />
  </Container>
);

export default App;