import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication, then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };


  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formUsername">
      <Form.Label column sm={2}>Username:</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPassword">  
        <Form.Label column sm={2}>Password:</Form.Label>
        <Col sm={10}>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Log in</Button>
        </Col>
      </Form.Group>

    </Form>
  );

}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};