import React, { useState, useReducer } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userData, setUserData] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleInputChange = (e) => {
    [e.target.name] = e.target.value
  }

  return (
    <div>
      <div className="jumbotron">Login</div>
      <div>
        <form>
          <input type="text" name="email" placeholder="Email" className="form-control my-4"></input>
          <input type="text" name="pass" placeholder="Password" className="form-control my-4"></input>
          <button type="button" className="btn btn-block btn-secondary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;