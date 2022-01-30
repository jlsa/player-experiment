import React, { useState } from 'react';

import './App.scss';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import Spotify from './Components/Spotify/Spotify';

function AlertDismissibleExample() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          I am an alert of type <span className="dangerText">danger</span>! But
          my color is Teal!
        </Alert.Heading>
        <p>
          By the way the button you just clicked is an{' '}
          <span className="infoText">Info</span> button but is using the color
          Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium debitis deleniti distinctio impedit officia reprehenderit
          suscipit voluptatibus. Earum, nam necessitatibus!
        </p>
      </Alert>
    );
  }
  return (
    <Button variant="info" onClick={() => setShow(true)}>
      Show Custom Styled Alert
    </Button>
  );
}

const App = () => (
  <>

    <Container className="p-3">
      <Spotify />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </div>
      <Container className="pb-1 p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Welcome To <FontAwesomeIcon className="spotify-brand" icon={faSpotify} /></h1>
        <h2 className="header">Using Sass with custom theming</h2>
        <AlertDismissibleExample />
        <hr />
        <p>
          You can check further in information on the official Bootstrap docs{' '}
          <a
            href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </Container>
      <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row>

      <FontAwesomeIcon icon={faSpotify} />
      <FontAwesomeIcon icon={faUserClock} />
      <FontAwesomeIcon icon={faCoffee} />
    </Container>
  </>
);

export default App;

// import React, { useState, useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import WebPlayback from './WebPlayback'
// // import Login from './Login'
// import { Routes, Route, Link } from "react-router-dom";
// import './App.scss';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// // function App() {

// //   const [token, setToken] = useState('');

// //   useEffect(() => {

// //     async function getToken() {
// //       const response = await fetch('/auth/token');
// //       const json = await response.json();
// //       setToken(json.access_token);
// //     }

// //     getToken();

// //   }, []);

// //   return (
// //     <>
// //         { (token === '') ? <Login/> : <WebPlayback token={token} /> }
// //     </>
// //   );
// // }

// function AlertDismissible() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>How's it going?!</Alert.Heading>
//         <p>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//           fermentum.
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me y'all!
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }

// const Home = () => {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/" className="app-btn">Home</Link>
//         <Link to="/about" className="app-btn">About</Link>
//       </nav>
//     </>
//   )
// }

// const About = () => {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don't you think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/" className="app-btn">Home</Link>
//         <Link to="/about" className='app-btn'>About</Link>
//       </nav>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <>
//       {/* <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
//       <Button variant="link">Link</Button> */}
//       <AlertDismissible />
//     </>
//   )
// }

// export default App;
