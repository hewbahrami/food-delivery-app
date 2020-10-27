import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import './styles/Home.css';

const Home = () => {
  return (
    <div>
      <Link to='/login'>
        <button>Sign In</button>
      </Link>
      <Link to='/register'>
        <button>Sign Up</button>
      </Link>
      <div className="search-component">
      <SearchBar />
      </div>
    </div>
  )
}

export default Home;