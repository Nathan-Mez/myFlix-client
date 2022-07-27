
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './login-view.scss';


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Declare hook for each input
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');

  // validate user inputs
const validate = () => {
  let isReq = true;
  if(!username){
   setUsernameErr('Username Required');
   isReq = false;
  }else if(username.length < 4){
   setUsernameErr('Username must be 5 characters long');
   isReq = false;
  }
  if(!password){
   setPasswordErr('Password Required');
   isReq = false;
  }else if(password.length < 6){
   setPassword('Password must be 6 characters long');
   isReq = false;
  }

  return isReq;
}


  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://grandflix.herokuapp.com/login', null, { params:{
      Username: username,
      Password: password
    }})
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };
  



  return (
    <Form  className="login-view" style={{ width: '30rem' }}>
      <Form.Group  className="mb-3" controlId="formUsername">
       <Col xs={{ span: 10, offset: 1 }}>
       <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
          {/* code added here to display validation error */}
          {usernameErr && <p>{usernameErr}</p>} 
       </Col>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formPassword">  
        <Col xs={{ span: 10, offset: 1 }}>
        <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          {/* code added here to display validation error */}
          {passwordErr && <p>{passwordErr}</p>}
          </Col>   
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formRegisterLink">
        <Col xs={{ span: 10, offset: 2 }}>Not registered?
          <Link to="/register">  Sign-Up</Link>
        </Col>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Col xs={{ span: 10, offset: 2 }}>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Log in</Button>
        </Col>
      </Form.Group>

    </Form>
  );

}



LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};


