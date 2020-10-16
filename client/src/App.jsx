import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';



const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login"> <Login /> </Route>
          <Route path="/register"> <Register /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;