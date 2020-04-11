import React from 'react';
import './App.scss';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './views/home/Home'
import Search from './views/search/Search'
import SearchHeader from './components/SearchHeader'

function App() {
  return (
    <Router>
      <SearchHeader />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Router>
  );
}

export default App;
