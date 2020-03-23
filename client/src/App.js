import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Home from './components/Home.js';
import Summoner from './components/Summoner.js';

// Main app styling.
import './App.css';
import './images/backgrounds/background.jpg';

// Main App Class.
export default class App extends Component
{
  // Render our app here.
  render()
  {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Summoner/:region/:summoner" component={Summoner} />
          </Switch>
        </div>
      </Router>
    );
  }
}