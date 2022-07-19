

import React, { useState } from 'react';
//import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './registration-view.scss';



//user registration form taking necessary user details
export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');



  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username is required");
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr("Username must be 5 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password is required (6 characters long)");
      isReq = false;
    } else if (password.length < 5) {
      setPasswordErr("Password must be 5 characters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Add Email");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmail("Email must be a valid email address");
      isReq = false;
    }

    return isReq;
  };

const handleRegister = (e) => {
  e.preventDefault();
  const isReq = validate();
  console.log(username)
  if (isReq) {
    axios.post('https://grandflix.herokuapp.com/users', { 
      Username: username, 
      Password: password, 
      Email: email, 
      Birthday: birthday })
      .then((response) => {
        const data = response.data;
        console.log(data);
        alert("Your registration has been successfully processed. You can now proceed to login.");
        window.open("/", "_self");
        //open in the current tab
      })
      .catch((response) => {
        console.error(response);
        alert("error registering the user");
      });
  }
};
return (

    <Form style={{ width: '30rem' }}>

    <Form.Group  className="mb-3" controlId="formUsername">
     <Form.Label column sm={2}>Username*</Form.Label>
     <Col sm={{ span: 10, offset: 2 }}>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}required />
      </Col>
    </Form.Group>

    <Form.Group  className="mb-3" controlId="formPassword">  
      <Form.Label column sm={2}>Password*</Form.Label>
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="5" />
      </Col>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPassword">  
      <Form.Label column sm={2}>Email*</Form.Label>
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Control type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Col>
    </Form.Group>

    <Form.Group  className="mb-3" controlId="formPassword">  
      <Form.Label column sm={2}>Birthdate</Form.Label>
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Control type="date" placeholder="dd/mm/yyyy" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </Col>
    </Form.Group>

    <Form.Group  className="mb-3" controlId="formRegisterLink">
      <Col sm={{ span: 10, offset: 2 }}>Already have an account?
        <Link to="/">  Log-in</Link>
      </Col>
    </Form.Group>

    <Form.Group  className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="primary" type="submit" onClick={handleRegister}>Register</Button>
        </Col>
    </Form.Group>
   </Form>
)
}


