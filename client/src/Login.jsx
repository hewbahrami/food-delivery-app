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

    </div>
  )
}

export default Login;