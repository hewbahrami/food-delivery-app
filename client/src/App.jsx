import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';



const App = () => {
  return (
    <Router>
    <div>
      <Route path='/login' component={Login}/>
    </div>
    </Router>
  )
}

export default App;