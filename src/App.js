import React from 'react';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
