import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

const Home = () => {
  return (
    <div>
      <Link to='/login'>
        <button>Sign In</button>
      </Link>
      <Link to='/register'>
        <button>Sign Up</button>
      </Link>
      <SearchBar />
    </div>
  )
}

export default Home;