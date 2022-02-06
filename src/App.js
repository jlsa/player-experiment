import React from 'react';
import './App.scss';
import Spotify from './Components/Spotify/Spotify';
import Dashboard from './Components/Ui/Dashboard';

const App = () => (
  <Dashboard>
    <Spotify />
  </Dashboard>
);

export default App;