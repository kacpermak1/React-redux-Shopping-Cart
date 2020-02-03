import React from 'react';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router basename='Shopping-Cart'>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/cart" component={Cart} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
