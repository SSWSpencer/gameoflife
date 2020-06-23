import React from 'react';
import './styles/App.css';
import GoL from "./components/GoL";
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/">
          <HomePage />
        </Route>
        <Route exact path="/game-of-life">
          <GoL />
        </Route>
      </div>
    </Router>
  );
}

export default App;
