import React, { useState } from 'react';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
     props.onLoggedIn(username);
  };

  return (
    
    <form>
       <p>Enter your username and password to access your account </p><br></br>
      <label>
        Username:
        <br></br><input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label><br></br>
      <label>
        Password:
        <br></br><input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label><br></br>
      <p>New User <a href='#'>Sign in</a></p><br></br>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

//LoginView.propTypes = {
  //user: PropTypes.shape({
    //username: PropTypes.string.isRequired,
    //password: PropTypes.string.isRequired,
  //}),
  //onLoggedIn: PropTypes.func.isRequired,
//};