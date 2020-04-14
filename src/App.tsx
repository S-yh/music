import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './views/home/Home'
import Search from './views/search/Search'
import Songlist from './views/songlist/Index'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/songlist">
            <Songlist />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
