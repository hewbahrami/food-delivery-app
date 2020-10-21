import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userState, setUserState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pass: '',
    passConfirm: ''
  });
  const [redirect, setRedirect] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitForm = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, pass, passConfirm } = userState;
    if (!email.includes('@')) {
      window.alert("Please enter a valid email address")
    } else if (pass !== passConfirm) {
      window.alert("Password incorrect. Please re-enter a valid password")
    } else {
      axios.post('/register', { firstName, lastName, phone, email, pass })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div>
      <div className="jumbotron">Register</div>
      <div>
        <form onSubmit={submitForm}>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control my-4"
            required
          ></input>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control my-4"
            required
          ></input>
          <input
            onChange={handleInputChange}
            type="text"
            name="email"
            placeholder="Email"
            className="form-control my-4"
            required
          ></input>
          <input
            onChange={handleInputChange}
            type="text"
            name="pass"
            placeholder="Password"
            className="form-control my-4"
            required
          ></input>
          <input
            onChange={handleInputChange}
            type="text"
            name="passConfirm"
            placeholder="Re-enter Password"
            className="form-control my-4"
            required
          ></input>
          <button
            onClick={submitForm}
            type="button"
            className="btn btn-block btn-secondary">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register;