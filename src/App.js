import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Packages from './components/Packages';
import Customers from './components/Customers';
import StartHosting from './components/StartHosting';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/start-hosting'>
          <StartHosting />
        </Route>
        <Route exact path='/packages'>
          <Packages />
        </Route>
        <Route exact path='/customers'>
          <Customers />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
