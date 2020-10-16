import React, { useState } from 'react';

const Register = () => {
  const [userState, setUserState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pass: '',
    passVerification: ''
  });
  const [redirect, setRedirect] = useState(false);

  return (
    <div>
      <div className="jumbotron">Register</div>
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control my-4"
            required
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control my-4"
            required
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form-control my-4"
            required
          ></input>
          <input
            type="text"
            name="pass"
            placeholder="Password"
            className="form-control my-4"
            required
          ></input>
          <input
            type="text"
            name="pass"
            placeholder="Password"
            className="form-control my-4"
            required
          ></input>
          <input
            type="text"
            name="passVerification"
            placeholder="Re-enter Password"
            className="form-control my-4"
            required
          ></input>
          <button type="button" className="btn btn-block btn-secondary">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register;