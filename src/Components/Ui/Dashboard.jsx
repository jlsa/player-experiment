import React from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar, Nav, NavDropdown, Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';
import SpotifyPlayer from '../Spotify/SpotifyPlayer';

const Dashboard = ({ children }) => {
  const user = {
    displayName: 'Joël Hoekstra'
  };

  return (
    <Container fluid>
      <Row className='sticky-top'>
        <Navbar variant='dark' bg='dark' expand='lg' className='flex-md-nowrap'>
          <Navbar.Brand href='#'>JoSaHo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id='navbar-dark-example' className="justify-content-end">

            <strong className="me-2 px-3 text-info">
              <FontAwesomeIcon icon={faUserAstronaut} /> {user.displayName}
            </strong>
            <Image
              src="https://github.com/jlsa.png"
              alt=""
              width="32"
              height="32"
              className="me-2"
              roundedCircle
            />
            <Nav>
              <NavDropdown
                id='nav-dropdown-dark-example'

                menuVariant='dark'
                align={{ lg: 'end' }}
              >
                <NavDropdown.Item href='#'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#'>Action2</NavDropdown.Item>
                <NavDropdown.Item href='#'>Action3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#'>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
      <Row>
        <Col md={3} lg={2} className={'sidebar bg-light collapse2 position-sticky'}>
          <div className="position-sticky">

            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  Home
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Overview</a></li>
                    <li><a href="#" className="link-dark rounded">Updates</a></li>
                    <li><a href="#" className="link-dark rounded">Reports</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  Dashboard
                </button>
                <div className="collapse" id="dashboard-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Overview</a></li>
                    <li><a href="#" className="link-dark rounded">Weekly</a></li>
                    <li><a href="#" className="link-dark rounded">Monthly</a></li>
                    <li><a href="#" className="link-dark rounded">Annually</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                  Orders
                </button>
                <div className="collapse" id="orders-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">New</a></li>
                    <li><a href="#" className="link-dark rounded">Processed</a></li>
                    <li><a href="#" className="link-dark rounded">Shipped</a></li>
                    <li><a href="#" className="link-dark rounded">Returned</a></li>
                  </ul>
                </div>
              </li>
              <li className="border-top my-3"></li>
              <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                  Account
                </button>
                <div className="collapse" id="account-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">New...</a></li>
                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <SpotifyPlayer />
        </Col>
        <Col className="content-body">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

Dashboard.propTypes = {
  children: PropTypes.array
};

export default Dashboard;