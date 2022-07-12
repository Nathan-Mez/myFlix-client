import React, { useState } from 'react';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  
     props.onLoggedIn(username);
  };

  return (
    <form>
       <p>Enter a new Username and Password to Open an Account </p><br></br>
      <label>
        Username:
        <br></br><input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label><br></br>
      <label>
        Email:
        <br></br><input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label><br></br>
      <label>
        Password:
        <br></br><input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label><br></br>
      <label>
        Birthday:
        <br></br><input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
      </label><br></br>

      <p>Already have an Account <a href='#'>Log-in</a></p><br></br>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};