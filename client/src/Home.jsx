import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/login'>
    <button>Sign In</button>
    </Link>
    <Link to='/register'>
    <button>Sign Up</button>
    </Link>
    </div>
  )
}

export default Home;