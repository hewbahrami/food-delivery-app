import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/SearchBar.css';

const neighborhoods = ['Bushwick', 'Greenpoint', 'Williamsburg', 'Bedford-Stuyvesant', 'Boerum Hill', 'Carroll Gardens', 'Cobble Hill', 'Brooklyn Heights', 'Brownsville', 'Clinton Hill', 'Crown Heights', 'Cypress Hills', 'DUMBO', 'East New York', 'Fort Greene', 'Gowanus', 'Greenwood Heights', 'New Lots', 'Ocean Hill', 'Park Slope', 'Prospect Heights', 'Stuyvesant Heights', 'Sunset Park', 'Vinegar Hill', 'Windsor Terrace', 'Canarsie', 'Marine Park', 'Mill Basin', 'Brighton Beach', 'Coney Island', 'Gravesend', 'Midwood', 'Sheepshead Bay', 'Bay Ridge', 'Borough Park', 'Dyker Heights', 'New Utrecht', 'Bensonhurst', 'Ditmas Park', 'East Flatbush', 'Flatbush', 'Kensington', 'Prospect Lefferts Gardens'];

const SearchBar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState()
  const handleInputChange = (e) => {
    const value = e.target.value;
    let locations = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      locations = neighborhoods.sort().filter((search) => regex.test(search));
    }
    setText(value);
    setSuggestions(locations)
  }
  const renderSuggestions = () => {
    if (suggestions.length === 0) return null;
    return (
      <ul>
        {suggestions.map(suggestion => <li onClick={() => suggestionSelected(suggestion)}>{suggestion}</li>)}
      </ul>
    )
  }
  const suggestionSelected = (value) => {
    setText(value);
    setSuggestions([])
  }

  const handleSubmit = e => {
    e.preventDefault();
    //make axios call
    axios.get(`/restaurants/${text}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-input"
          value={text}
          onChange={handleInputChange}
          onKeyPress={handleKeypress}
          type="text"
          placeholder="Enter Address to Search Restaurants Nearby"
        >
        </input>
        {renderSuggestions()}
      </div>
      <div>
        <button
          className="search-submit"
          type="submit"
          onClick={handleSubmit}>S</button>
      </div>
    </div>
  )
}

export default SearchBar;