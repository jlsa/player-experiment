import React, { useState, useEffect } from 'react';
// import WebPlayback from './WebPlayback';
// import Login from './Login';
import './SpotifyApp.css';

// const App = () => {
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     async function getToken() {
//       const response = await fetch('/auth/token');
//       const json = await response.json();
//       setToken(json.access_token);
//       console.log(json.access_token);
//     }

//     getToken();
//   }, []);

//   useEffect(() => {
//     console.log('token', token);
//   }, [token]);

//   return (
//     <>
//       {(token === '') ? <Login /> : <WebPlayback token={token} />}
//     </>
//   )
// }

// export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
