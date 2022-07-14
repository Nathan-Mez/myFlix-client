import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

//Import MainVeiw component
import { MainView } from './components/main-view/main-view';

import React from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';

//Import MainVeiw component
import { MainView } from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./clapperboard.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              GrandFlix
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);

// Finds the root of your app
const navbar = document.getElementsByClassName('nav-bar')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(NavBar), navbar);