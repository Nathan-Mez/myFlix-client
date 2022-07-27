
import React from 'react';

import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './navbar-view.scss';


export function NavBar({user}) {

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.open("/", "_self");
        //props.onLoggedOut(user);
      };  

    const isAuth = () => {
      if(typeof window == "undefined") {
        return false;
      }
      if (localStorage.getItem("token")) {
        return localStorage.getItem("token");
      }
      else {
        return false;
      }
  };

return (
        <Navbar className="main-nav" bg="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand className="navbar-logo" href="/">
                <img
                  alt=""
                  src={require("./logo.png")}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                GrandFlix
              </Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {isAuth() && (
                        <Nav.Link href = {`/users/${user}`}>{user}</Nav.Link>)}
                    {isAuth() && (
                        <Button variant="warning" onClick={handleLogOut}>Logout</Button> )}
                    {!isAuth() && (
                        <Nav.Link herf="/">Sign-in</Nav.Link>)}
                    {!isAuth() && (
                        <Nav.Link href="/register">Sign-up</Nav.Link>)}
                </Nav>   
              </Navbar.Collapse>       

            </Container>
    </Navbar>
    );
}
