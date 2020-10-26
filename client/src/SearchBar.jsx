import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    console.log(suggestions)
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

  return (
    <div>
      <input value={text} onChange={handleInputChange} type="text" placeholder="Enter Address to Search Restaurants Nearby"></input>
      {renderSuggestions()}
    </div>
  )
}

export default SearchBar;